import asyncio
import json
import pandas as pd
import websockets
from pdfminer.high_level import extract_text
import re

# Path to your uploaded files
pdf_path = r"C:\xampp\htdocs\webpage\chatbot.py\indianpenalcode.pdf"
csv_path = r"C:\xampp\htdocs\webpage\chatbot.py\ipc_sections.csv"

# Load the dataset containing IPC sections
ipc_csv_data = pd.read_csv(csv_path)

# Extract text from IPC PDF
def extract_pdf_text(file_path):
    """Extract text from a PDF file."""
    return extract_text(file_path)

ipc_pdf_text = extract_pdf_text(pdf_path)

# Function to search the CSV data
def search_csv(query):
    """Search the IPC CSV for relevant sections."""
    matches = ipc_csv_data[ipc_csv_data['Description'].str.contains(query, case=False, na=False)]
    if not matches.empty:
        return matches.to_dict(orient="records")
    return []

# Function to search the PDF data
def search_pdf(query):
    """Search the IPC PDF text for relevant matches."""
    matches = re.findall(rf"Section\s*\d+.*?{query}.*?(?=Section\s*\d+|$)", ipc_pdf_text, flags=re.IGNORECASE | re.DOTALL)
    return matches if matches else []

# Generate legal response based on both sources
def generate_legal_response(user_input):
    """
    Generate a legal response based on user input by searching both the IPC PDF and CSV.
    Args:
        user_input (str): User's input describing a situation.
    Returns:
        str: A detailed legal response.
    """
    # Search the CSV
    csv_matches = search_csv(user_input)
    responses = []

    if csv_matches:
        for match in csv_matches:
            responses.append(
                f"According to Section {match['Section']} of the IPC, '{match['Offense']}', "
                f"is described as '{match['Description']}'. Punishment: {match['Punishment']}."
            )

    # Search the PDF
    pdf_matches = search_pdf(user_input)
    if pdf_matches:
        responses.extend(pdf_matches)

    if responses:
        return " ".join(responses)

    # Fallback response if no match found
    return (
        "I could not find a specific section for your query in the Indian Penal Code. "
        "However, based on Indian legal principles, you may consult a legal expert for assistance."
    )

# WebSocket handler
async def handle_websocket(client_websocket, path):
    """Handle WebSocket connections and provide responses."""
    print(f"Client connected at path: {path}")
    try:
        async for message in client_websocket:
            data = json.loads(message)
            user_input = data.get("query", "")
            print(f"User query: {user_input}")

            # Generate a legal response
            response = generate_legal_response(user_input)
            await client_websocket.send(json.dumps({"response": response}))

    except Exception as e:
        print(f"Error in WebSocket handler: {e}")
    finally:
        print("Connection closed")

# Main entry point to start the WebSocket server
async def main():
    async with websockets.serve(handle_websocket, "localhost", 9080):
        print("WebSocket server is running at ws://localhost:9080")
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
