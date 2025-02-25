// const express = require("express");
// const router = express.Router();

// // Sample case histories data
// const caseHistories = [
//     { id: 1, title: "Land Dispute", description: "A legal case regarding land ownership." },
//     { id: 2, title: "Labor Rights", description: "An issue related to workers' rights and employment laws." },
// ];

// // GET API to fetch case histories
// router.get("/case-histories", (req, res) => {
//     res.json(caseHistories);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const caseHistories = [
    { id: 1, title: "Land Dispute", description: "A legal case regarding land ownership.", pdfUrl: "/pdfs/Land_Dispute.pdf" },
    { id: 2, title: "Labor Rights", description: "An issue related to workers' rights and employment laws.", pdfUrl: "/pdfs/Labor_Rights.pdf" }
];

// GET API to fetch case histories
router.get("/", (req, res) => {
    res.json(caseHistories);
});

module.exports = router;
