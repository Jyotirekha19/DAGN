import React from 'react';
import { useParams } from 'react-router-dom';
import "./StateDetailsPage.css";

const StateDetailsPage = () => {
  const { id } = useParams(); // Get the state ID from the URL
  
  // Data for Indian states with their rights
  const statesData = [
    { id: 1, name: 'Andhra Pradesh',  rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Andhra Pradesh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Implementation of Domestic Violence Act with dedicated support centers.</li>
          <li>Free legal aid for women in distress.</li>
          <li>Special reservation in government jobs and educational institutions.</li>
          <li>Mahila Police volunteers deployed to assist women in need.</li>
          <li>Financial support schemes for widows and single mothers.</li>
          <li>Stringent enforcement of laws against harassment and workplace discrimination.</li>
          <li>SHE Teams initiative to prevent and respond to crimes against women.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Mid-day meal scheme for school children.</li>
          <li>Child protection services against labor exploitation.</li>
          <li>Right to free education under the RTE Act.</li>
          <li>Bala Raksha Bhavan initiative for children in distress.</li>
          <li>Exclusive juvenile justice boards to handle child-related cases.</li>
          <li>Scholarship schemes for meritorious students from disadvantaged backgrounds.</li>
          <li>Dedicated helpline for child abuse prevention.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes for elderly citizens.</li>
          <li>Free healthcare services in government hospitals.</li>
          <li>Senior citizen welfare homes with free medical facilities.</li>
          <li>Concessional public transport for elderly individuals.</li>
          <li>Old age pension under the YSR Pension Kanuka scheme.</li>
          <li>Free legal assistance for senior citizens facing property disputes or abuse.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act.</li>
          <li>Special grievance cell for unorganized laborers.</li>
          <li>Social security benefits for daily wage workers.</li>
          <li>Dedicated worker welfare boards for construction and industrial laborers.</li>
          <li>Compensation and insurance schemes for laborers under state-run welfare programs.</li>
          <li>Regulation of working conditions under the Andhra Pradesh Labour Welfare Board.</li>
          <li>Skill development and vocational training programs for workers.</li>
        </ul>
      </div>
    </div>},
    { id: 2, name: 'Arunachal Pradesh', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Arunachal Pradesh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Stringent laws against child marriage and domestic violence.</li>
          <li>Women Self-Help Groups (SHGs) for financial independence and skill development.</li>
          <li>Special government schemes to support widows and single mothers.</li>
          <li>Dedicated helpline for reporting crimes against women.</li>
          <li>Legal aid and counseling centers for women in distress.</li>
          <li>Reservation policies in education and government jobs for women.</li>
          <li>Strict enforcement of workplace harassment laws.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Scholarship schemes for tribal and economically weaker children.</li>
          <li>Strict protection laws against child labor and trafficking.</li>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Government-funded hostels and residential schools for underprivileged children.</li>
          <li>Mid-day meal program to support child nutrition in schools.</li>
          <li>Special juvenile justice system to protect the rights of children in conflict with the law.</li>
          <li>Child welfare committees and helplines for reporting abuse.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Senior citizen welfare homes with free healthcare and accommodation.</li>
          <li>Pension schemes for elderly individuals from weaker economic backgrounds.</li>
          <li>Concessional travel facilities in public transport for senior citizens.</li>
          <li>Legal assistance and support for cases of elderly abuse and property disputes.</li>
          <li>Healthcare benefits in government hospitals for senior citizens.</li>
          <li>Awareness programs for elderly rights and entitlements.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Social security benefits for daily wage and unorganized sector workers.</li>
          <li>Maternity benefits and paid leave for women laborers.</li>
          <li>Implementation of minimum wage laws for all categories of workers.</li>
          <li>Special compensation schemes for workplace accidents and injuries.</li>
          <li>Worker welfare funds for construction and industrial laborers.</li>
          <li>Skill development programs to enhance employability among laborers.</li>
          <li>Strict enforcement of working hour regulations and workplace safety norms.</li>
        </ul>
      </div>
    </div> },
    { id: 3, name: 'Assam', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Assam</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Dedicated women's helpline to report crimes and seek legal assistance.</li>
          <li>Special fast-track courts for cases related to violence against women.</li>
          <li>Government schemes supporting self-employment and entrepreneurship for women.</li>
          <li>Strict enforcement of laws against trafficking and sexual exploitation.</li>
          <li>Reservation policies for women in government jobs and educational institutions.</li>
          <li>Financial aid programs for widows and single mothers.</li>
          <li>Mahila Samridhi Yojana to promote economic empowerment of women.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Free education and mid-day meal scheme for school children.</li>
          <li>Strict implementation of the Child Marriage Prohibition Act.</li>
          <li>Scholarship programs for meritorious students from underprivileged backgrounds.</li>
          <li>Government-run orphanages and shelter homes for abandoned children.</li>
          <li>Juvenile justice system to ensure fair treatment of children in conflict with the law.</li>
          <li>Dedicated child helpline for reporting abuse and exploitation.</li>
          <li>Strict enforcement of child labor prohibition laws.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Government pension schemes for economically weaker senior citizens.</li>
          <li>Special healthcare provisions in government hospitals for elderly individuals.</li>
          <li>Old-age homes providing free accommodation and medical facilities.</li>
          <li>Legal aid and support for senior citizens facing property disputes or abuse.</li>
          <li>Concessional travel fares on public transport for elderly citizens.</li>
          <li>Welfare programs for elderly people without family support.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Registration and welfare schemes for migrant and daily wage workers.</li>
          <li>Strict enforcement of minimum wage laws.</li>
          <li>Social security benefits and accident insurance for industrial laborers.</li>
          <li>Compensation schemes for workplace injuries and accidents.</li>
          <li>Skill development and vocational training programs for unskilled laborers.</li>
          <li>Maternity benefits for female laborers in both organized and unorganized sectors.</li>
          <li>Regulation of working hours and workplace safety standards.</li>
        </ul>
      </div>
    </div> },
    { id: 4, name: 'Bihar', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Bihar</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Exclusive women’s police stations to handle gender-based violence cases.</li>
          <li>Free legal aid services for women facing domestic violence or harassment.</li>
          <li>Government reservation for women in Panchayati Raj institutions.</li>
          <li>Financial assistance for women entrepreneurs under various self-employment schemes.</li>
          <li>Women’s helpline numbers for immediate legal and safety assistance.</li>
          <li>Stringent enforcement of anti-dowry laws and domestic violence prevention measures.</li>
          <li>Empowerment initiatives through self-help groups (SHGs) and microfinance programs.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education Act (RTE) ensuring free and compulsory education.</li>
          <li>Mid-day meal scheme to provide nutritious food to school-going children.</li>
          <li>Strict prohibition of child marriage and enforcement of the Prohibition of Child Marriage Act.</li>
          <li>Special programs for child welfare, including child adoption and foster care.</li>
          <li>Government-run hostels and educational schemes for underprivileged children.</li>
          <li>Strict laws and monitoring bodies to prevent child labor and trafficking.</li>
          <li>Scholarship programs for SC/ST and economically weaker students.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Government pension schemes for senior citizens under Bihar’s social security initiatives.</li>
          <li>Old-age homes and community support programs for elderly citizens.</li>
          <li>Special healthcare services and free treatment in government hospitals.</li>
          <li>Concessional travel fares on public transport for senior citizens.</li>
          <li>Legal protection and helplines for elderly individuals facing abuse or harassment.</li>
          <li>Property rights protection laws to prevent illegal occupation and fraud.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Strict enforcement of the Minimum Wages Act to ensure fair compensation.</li>
          <li>Social security and insurance schemes for unorganized sector workers.</li>
          <li>Compensation programs for workers injured in industrial accidents.</li>
          <li>Mandatory labor rights awareness programs in industrial zones.</li>
          <li>Regulations ensuring better working conditions and job security for daily wage laborers.</li>
          <li>Government skill development programs for unemployed youth.</li>
          <li>Special provisions for maternity benefits and welfare of female laborers.</li>
        </ul>
      </div>
    </div> },
    { id: 5, name: 'Chhattisgarh', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Chhattisgarh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Special fast-track courts for crimes against women.</li>
          <li>Financial assistance for women entrepreneurs through self-employment schemes.</li>
          <li>Free legal aid and counseling services for women in distress.</li>
          <li>Strict implementation of domestic violence and anti-dowry laws.</li>
          <li>Women-only police stations for better handling of gender-related crimes.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Women’s helpline services for emergency assistance and legal guidance.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) ensuring free schooling for children.</li>
          <li>Mid-day meal scheme to provide nutritious food to school children.</li>
          <li>Stringent laws to prohibit child labor and trafficking.</li>
          <li>State-funded scholarships and financial aid for underprivileged students.</li>
          <li>Special juvenile justice boards to handle cases involving children.</li>
          <li>Free health check-ups and immunization programs for children.</li>
          <li>Child protection services and rescue operations for abandoned children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>State-sponsored pension schemes for elderly citizens.</li>
          <li>Government-run old-age homes with free medical care.</li>
          <li>Special healthcare initiatives for senior citizens in public hospitals.</li>
          <li>Subsidized public transport facilities for elderly individuals.</li>
          <li>Free legal aid for senior citizens facing property disputes or harassment.</li>
          <li>Welfare schemes offering financial assistance to elderly individuals living below the poverty line.</li>
          <li>Special provisions to prevent elder abuse and safeguard their rights.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Strict enforcement of minimum wage laws.</li>
          <li>Special welfare funds for construction workers and daily wage laborers.</li>
          <li>Social security benefits and insurance schemes for unorganized sector workers.</li>
          <li>Government-led skill development and vocational training programs.</li>
          <li>Mandatory safety regulations for industrial workers.</li>
          <li>Compensation schemes for laborers injured in workplace accidents.</li>
          <li>Maternity benefits and special welfare programs for female laborers.</li>
        </ul>
      </div>
    </div>},
    { id: 6, name: 'Goa', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Goa</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of laws against domestic violence and harassment.</li>
          <li>Special police helplines and women’s safety initiatives.</li>
          <li>Financial aid for women entrepreneurs under state schemes.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Implementation of the Goa Children’s Act to protect girls and young women.</li>
          <li>Dedicated legal aid services and crisis centers for women in distress.</li>
          <li>Government-run counseling and rehabilitation centers for victims of abuse.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Enforcement of the Goa Children's Act for child protection and safety.</li>
          <li>Strict anti-child labor laws and rescue operations.</li>
          <li>Mid-day meal scheme for students in government schools.</li>
          <li>Free and compulsory education under the Right to Education (RTE) Act.</li>
          <li>Scholarships for children from economically weaker backgrounds.</li>
          <li>Dedicated child protection services and welfare committees.</li>
          <li>State-run adoption and foster care programs for orphaned children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes for elderly citizens.</li>
          <li>Free medical check-ups and healthcare support in government hospitals.</li>
          <li>Subsidized housing schemes for senior citizens from low-income groups.</li>
          <li>Legal aid for senior citizens in property and financial disputes.</li>
          <li>Free public transport and concessions for elderly residents.</li>
          <li>State-run old-age homes with quality care and facilities.</li>
          <li>Social welfare programs for elderly individuals living alone.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Strict implementation of minimum wage laws.</li>
          <li>Social security schemes for daily wage laborers.</li>
          <li>Welfare benefits for workers in the tourism and hospitality industry.</li>
          <li>Special rights and protections for migrant workers in Goa.</li>
          <li>Financial aid for workers affected by job loss due to economic downturns.</li>
          <li>Skill development programs to help workers transition into new employment opportunities.</li>
          <li>Compensation and insurance for workplace injuries and accidents.</li>
        </ul>
      </div>
    </div> },
    { id: 7, name: 'Gujarat', rights:     <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Gujarat</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of the Domestic Violence Act and harassment laws.</li>
          <li>Mahila Police Stations to handle women-related crimes.</li>
          <li>Financial support for women entrepreneurs through government schemes.</li>
          <li>Special reservation for women in government jobs and panchayats.</li>
          <li>Women’s self-help groups (SHGs) for financial independence.</li>
          <li>Dedicated helplines and fast-track courts for crimes against women.</li>
          <li>Implementation of Beti Bachao Beti Padhao scheme to promote education for girls.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) Act for free schooling.</li>
          <li>Mid-day meal scheme to provide nutritious food to school children.</li>
          <li>Strict prohibition and monitoring of child labor.</li>
          <li>Special initiatives for tribal and rural children’s education.</li>
          <li>Dedicated child protection cells to prevent child trafficking.</li>
          <li>Scholarships for meritorious students from underprivileged backgrounds.</li>
          <li>Bal Gopal Yojana for healthcare and nutrition of newborns.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension under the Gujarat Vrudh Pension Scheme.</li>
          <li>Subsidized healthcare and free medical check-ups for senior citizens.</li>
          <li>Legal aid for elderly individuals in cases of abuse and property disputes.</li>
          <li>Concession on public transport and railway travel.</li>
          <li>State-funded old-age homes and senior citizen welfare centers.</li>
          <li>Priority access to government schemes and banking services.</li>
          <li>Special safety and support initiatives for elderly individuals living alone.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Strict implementation of Minimum Wages Act for all industries.</li>
          <li>Social security benefits for daily wage workers and construction laborers.</li>
          <li>Special labor welfare boards for textile, diamond, and industrial workers.</li>
          <li>Financial assistance for workers affected by workplace injuries.</li>
          <li>Government-backed skill development programs to enhance employment opportunities.</li>
          <li>Implementation of the Contract Labor Regulation and Abolition Act.</li>
          <li>Housing and healthcare benefits for registered laborers.</li>
        </ul>
      </div>
    </div>},
    { id: 8, name: 'Haryana', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Haryana</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of the Domestic Violence Act and Dowry Prohibition Act.</li>
          <li>Financial assistance for women under the Haryana Women Development Scheme.</li>
          <li>Exclusive women police stations for better safety and grievance redressal.</li>
          <li>Special incentives for girls’ education under the Beti Bachao Beti Padhao campaign.</li>
          <li>Self-help groups (SHGs) and micro-financing schemes for women entrepreneurs.</li>
          <li>Free legal aid for women facing harassment or domestic violence.</li>
          <li>Women’s reservation in Panchayati Raj Institutions.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) Act ensuring free schooling.</li>
          <li>Mid-day meal scheme to provide nutritious food to school children.</li>
          <li>Strict enforcement of child labor laws and child trafficking prevention.</li>
          <li>Scholarship programs for meritorious and economically weaker students.</li>
          <li>Juvenile justice boards to handle cases related to child rights violations.</li>
          <li>Dedicated helpline for reporting child abuse and exploitation.</li>
          <li>State-funded orphanages and child welfare homes for abandoned children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension scheme for senior citizens under the Haryana Old Age Pension Scheme.</li>
          <li>Subsidized healthcare facilities in government hospitals.</li>
          <li>Priority access to government schemes, banking, and legal assistance.</li>
          <li>Concession in public transport fares for elderly citizens.</li>
          <li>State-supported senior citizen homes with medical and recreational facilities.</li>
          <li>Protection against elder abuse through dedicated helplines.</li>
          <li>Financial aid for elderly individuals without family support.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act ensuring fair wages.</li>
          <li>Social security and insurance benefits for daily wage workers.</li>
          <li>Welfare boards for workers in industries like agriculture and manufacturing.</li>
          <li>Financial compensation for laborers in case of workplace accidents.</li>
          <li>Skill development and training programs for unorganized workers.</li>
          <li>Regulation of working conditions under Haryana Labor Welfare Board.</li>
          <li>Special provisions for maternity benefits and paid leave for women workers.</li>
        </ul>
      </div>
    </div>},
    { id: 9, name: 'Himachal Pradesh', rights:<div className="rights-container">
      <h1 className="state-title">Know Your Rights: Himachal Pradesh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of the Protection of Women from Domestic Violence Act.</li>
          <li>Reservation for women in government jobs and educational institutions.</li>
          <li>Financial aid and vocational training for women entrepreneurs.</li>
          <li>Implementation of the Beti Hai Anmol scheme to support girl child education.</li>
          <li>Mahila Shakti Kendras established for women empowerment and support.</li>
          <li>Free legal aid and counseling services for women in distress.</li>
          <li>Special fast-track courts for handling crimes against women.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) Act ensuring free and compulsory education.</li>
          <li>Mid-day meal scheme providing nutritious food for school children.</li>
          <li>Strict enforcement of child labor laws to prevent exploitation.</li>
          <li>Mukhya Mantri Bal Uddhar Yojana for the welfare of orphaned children.</li>
          <li>Scholarships and financial aid for meritorious and economically weaker students.</li>
          <li>Dedicated juvenile justice boards for handling child-related cases.</li>
          <li>Child helpline services to report abuse and provide support.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes under the Himachal Pradesh Old Age Pension Scheme.</li>
          <li>Concessional fares in public transport for senior citizens.</li>
          <li>Free medical check-ups and treatment in government hospitals.</li>
          <li>Establishment of old-age homes with proper healthcare and recreational facilities.</li>
          <li>Legal aid services for elderly individuals facing abuse or financial exploitation.</li>
          <li>Government schemes providing financial assistance for economically weaker senior citizens.</li>
          <li>Special provisions in housing schemes for elderly individuals.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act ensuring fair wages for laborers.</li>
          <li>Social security benefits and insurance for workers in unorganized sectors.</li>
          <li>Himachal Pradesh Building and Other Construction Workers Welfare Board for labor welfare.</li>
          <li>Financial aid and compensation for workplace accidents.</li>
          <li>Skill development programs to promote employment opportunities.</li>
          <li>Strict regulation of working conditions to ensure labor safety.</li>
          <li>Maternity benefits and paid leave provisions for women workers.</li>
        </ul>
      </div>
    </div> },
    { id: 10, name: 'Jharkhand', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Jharkhand</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict implementation of the Domestic Violence Act for women’s safety.</li>
          <li>Mukhya Mantri Sukanya Yojana providing financial aid to girl children.</li>
          <li>Special legal aid cells for women facing domestic and workplace harassment.</li>
          <li>Women Self-Help Groups (SHGs) for economic empowerment and livelihood support.</li>
          <li>Free legal assistance for women in distress through helpline services.</li>
          <li>Reservation for women in government jobs and panchayat elections.</li>
          <li>Hostel facilities and financial aid for single working women.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) Act ensuring free and compulsory education.</li>
          <li>Mid-day meal scheme providing nutritious food in government schools.</li>
          <li>Strict prohibition of child labor and enforcement of child protection laws.</li>
          <li>Jharkhand Child Protection Services for safeguarding children’s rights.</li>
          <li>Scholarships and incentives for students from economically weaker sections.</li>
          <li>Special residential schools for underprivileged and tribal children.</li>
          <li>Child helpline services to report abuse, trafficking, and exploitation.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes under the Jharkhand State Old Age Pension Scheme.</li>
          <li>Concessional public transport fares for senior citizens.</li>
          <li>Free medical check-ups and treatment for elderly individuals in government hospitals.</li>
          <li>Establishment of old-age homes providing shelter, food, and healthcare.</li>
          <li>Legal aid services for senior citizens facing property disputes or abuse.</li>
          <li>Financial assistance programs for economically weaker senior citizens.</li>
          <li>Priority services for senior citizens in public offices and hospitals.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act ensuring fair wages for laborers.</li>
          <li>Jharkhand Building and Other Construction Workers Welfare Board for labor rights.</li>
          <li>Social security benefits and insurance schemes for unorganized sector workers.</li>
          <li>Strict labor laws to prevent exploitation and unsafe working conditions.</li>
          <li>Compensation and financial aid for laborers in case of workplace injuries.</li>
          <li>Skill development and vocational training programs to enhance employment opportunities.</li>
          <li>Special schemes for migrant laborers ensuring financial and job security.</li>
        </ul>
      </div>
    </div> },
    { id: 11, name: 'Karnataka', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Karnataka</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Stringent enforcement of the Protection of Women from Domestic Violence Act.</li>
          <li>Government-funded legal aid centers for women in distress.</li>
          <li>Special reservation for women in government jobs and educational institutions.</li>
          <li>Women Helpline (Vanitha Sahaya Vani) for assistance against harassment.</li>
          <li>Financial assistance schemes for widows and single mothers.</li>
          <li>Women’s cooperatives and self-help groups for economic empowerment.</li>
          <li>Santwana Kendras providing shelter and rehabilitation for women in distress.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the Karnataka State RTE Act.</li>
          <li>Mid-Day Meal Scheme ensuring nutritious food for school children.</li>
          <li>Special homes and rehabilitation centers for abandoned and orphaned children.</li>
          <li>Stringent enforcement of child labor laws and rescue operations.</li>
          <li>Scholarships for students from economically weaker sections.</li>
          <li>Child helpline (1098) for reporting child abuse and exploitation.</li>
          <li>Juvenile Justice Boards handling child welfare cases.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes under the Sandhya Suraksha Yojana.</li>
          <li>Concessional public transport for senior citizens.</li>
          <li>Free healthcare services for elderly citizens in government hospitals.</li>
          <li>State-run old-age homes providing shelter and medical care.</li>
          <li>Legal aid centers to help senior citizens with property and inheritance disputes.</li>
          <li>Welfare schemes providing financial aid for destitute elderly individuals.</li>
          <li>Dedicated helpline for elderly abuse prevention.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act ensuring fair wages.</li>
          <li>Social security benefits for unorganized sector workers.</li>
          <li>Compensation for workplace injuries and labor accidents.</li>
          <li>Skill development programs under Karnataka Skill Development Corporation.</li>
          <li>Mandatory registration of construction and migrant workers.</li>
          <li>Welfare boards for various labor categories ensuring financial and job security.</li>
          <li>Strict laws against bonded labor and unfair treatment of workers.</li>
        </ul>
      </div>
    </div> },
    { id: 12, name: 'Kerala', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Kerala</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of the Domestic Violence Act and Protection of Women from Sexual Harassment at Workplace Act.</li>
          <li>Kudumbashree program empowering women through self-help groups and financial assistance.</li>
          <li>Women-exclusive police stations and legal aid cells to handle gender-based crimes.</li>
          <li>Free legal aid and support for domestic violence and abuse victims.</li>
          <li>Special reservation for women in education, jobs, and governance.</li>
          <li>Gender Park initiative to promote gender equality.</li>
          <li>Pink Police Patrol to ensure women's safety in public spaces.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under Kerala State RTE Act.</li>
          <li>Mid-Day Meal Scheme ensuring nutritious food for school-going children.</li>
          <li>Strict implementation of the ban on child labor with rescue and rehabilitation programs.</li>
          <li>Child helpline (1098) to report abuse and exploitation.</li>
          <li>Kerala State Commission for Protection of Child Rights ensuring child welfare.</li>
          <li>Scholarships and financial aid for underprivileged children.</li>
          <li>Special juvenile homes and child-friendly courts to handle minor-related cases.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Vayomithram Scheme providing free healthcare and medicines to elderly citizens.</li>
          <li>Monthly pension scheme under the Indira Gandhi National Old Age Pension.</li>
          <li>Concessional travel in public transport for senior citizens.</li>
          <li>Free medical check-ups and treatment at government hospitals.</li>
          <li>State-funded old age homes providing shelter and medical care.</li>
          <li>Legal assistance for senior citizens facing financial and property disputes.</li>
          <li>Helpline for elderly abuse prevention and support services.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act ensuring fair wages for all workers.</li>
          <li>Social security and insurance benefits for unorganized laborers.</li>
          <li>Kerala Abkari Workers’ Welfare Fund ensuring financial support.</li>
          <li>Mandatory registration of migrant workers to prevent exploitation.</li>
          <li>Skill development programs under the Kerala Academy for Skills Excellence.</li>
          <li>Compensation for workplace injuries and legal aid for disputes.</li>
          <li>Strict laws against bonded labor and exploitation of daily wage earners.</li>
        </ul>
      </div>
    </div>},
    { id: 13, name: 'Madhya Pradesh', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Madhya Pradesh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Implementation of the Ladli Laxmi Yojana to provide financial assistance for girls’ education.</li>
          <li>Strict enforcement of laws against domestic violence, harassment, and gender discrimination.</li>
          <li>Women-only police stations and fast-track courts for gender-based crimes.</li>
          <li>Free legal aid and counseling services for women in distress.</li>
          <li>50% reservation for women in local governance (Panchayati Raj Institutions).</li>
          <li>Mukhya Mantri Kanya Vivah/Nikah Yojana for financial assistance in marriage.</li>
          <li>Special police teams (Shakti teams) deployed for women’s safety in public places.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Free and compulsory education under the Right to Education (RTE) Act.</li>
          <li>Mid-Day Meal Scheme ensuring nutritional support for school-going children.</li>
          <li>Strict implementation of child labor prohibition laws with rehabilitation programs.</li>
          <li>Bal Shramik Vidya Yojana offering education and stipend for rescued child laborers.</li>
          <li>Scholarship schemes for SC/ST and economically weaker students.</li>
          <li>Integrated Child Protection Scheme (ICPS) to safeguard child welfare.</li>
          <li>Special juvenile homes and child-friendly courts for legal protection.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Mukhya Mantri Teerth Darshan Yojana for free pilgrimage for senior citizens.</li>
          <li>Monthly pension scheme under Indira Gandhi National Old Age Pension.</li>
          <li>Concessional or free public transport for senior citizens.</li>
          <li>State-run old-age homes with free shelter, medical, and counseling facilities.</li>
          <li>Free legal assistance for elderly people facing financial and property disputes.</li>
          <li>Government hospitals providing free medical check-ups and treatment for elderly individuals.</li>
          <li>Helpline services to prevent elder abuse and provide emergency assistance.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act ensuring fair wages for workers.</li>
          <li>Unorganized Worker’s Social Security Act for financial aid and insurance.</li>
          <li>Special provisions for construction workers, including welfare boards and pension schemes.</li>
          <li>Mandatory registration and protection of migrant workers’ rights.</li>
          <li>Vocational training and skill development under the Skill India Mission.</li>
          <li>Compensation and insurance schemes for workplace accidents.</li>
          <li>Strict regulations on working hours, conditions, and benefits for laborers.</li>
        </ul>
      </div>
    </div> },
    { id: 14, name: 'Maharashtra', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Maharashtra</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Manodhairya Scheme for financial aid and rehabilitation of survivors of violence.</li>
          <li>Special fast-track courts for crimes against women.</li>
          <li>Mandatory reservation for women in government jobs and local governance.</li>
          <li>Women’s self-help groups (SHGs) promoted for financial independence.</li>
          <li>Free legal aid and counseling for women in distress.</li>
          <li>Mahila Police Kaksha (Women’s Police Cells) in every police station.</li>
          <li>Strict enforcement of laws against dowry, domestic violence, and workplace harassment.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme ensuring nutrition for school children.</li>
          <li>Juvenile justice boards and child protection homes for abandoned or at-risk children.</li>
          <li>Prohibition of child labor with strict penalties and rescue operations.</li>
          <li>Scholarship schemes for underprivileged and disabled children.</li>
          <li>Bal Sangopan Yojana for financial aid to orphaned or destitute children.</li>
          <li>Dedicated child helplines for immediate assistance against abuse and exploitation.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Indira Gandhi National Old Age Pension Scheme for financial assistance.</li>
          <li>State-run old age homes with medical and shelter facilities.</li>
          <li>Special concessions for senior citizens in public transport.</li>
          <li>Free healthcare check-ups in government hospitals.</li>
          <li>Strict laws to prevent elder abuse and provide legal protection.</li>
          <li>Maharashtra Maintenance and Welfare of Parents and Senior Citizens Act for financial security.</li>
          <li>Helpline and emergency support services for elderly citizens.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act and strict monitoring of compliance.</li>
          <li>Maharashtra Building and Other Construction Workers Welfare Board for laborers.</li>
          <li>Social security benefits and insurance schemes for unorganized sector workers.</li>
          <li>Legal protection against bonded labor and workplace exploitation.</li>
          <li>Special funds for workers' children’s education and healthcare.</li>
          <li>Mandatory employer contributions to Provident Fund (PF) and Employee State Insurance (ESI).</li>
          <li>Skill development and vocational training programs for job opportunities.</li>
        </ul>
      </div>
    </div> },
    { id: 15, name: 'Manipur', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Manipur</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Manipur State Commission for Women provides legal aid and grievance redressal.</li>
          <li>Protection under the Domestic Violence Act with crisis intervention centers.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Support for women's self-help groups (SHGs) for financial independence.</li>
          <li>Legal assistance for women facing discrimination and harassment.</li>
          <li>Strict enforcement of laws against human trafficking, particularly in border areas.</li>
          <li>Empowerment programs for women entrepreneurs and artisans.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme for improving child nutrition.</li>
          <li>Juvenile justice boards and special homes for at-risk children.</li>
          <li>Prohibition of child labor and strict enforcement of child protection laws.</li>
          <li>Scholarship programs for children from economically weaker sections.</li>
          <li>Child helpline for immediate protection against abuse and exploitation.</li>
          <li>Special policies for the welfare of orphaned and conflict-affected children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Indira Gandhi National Old Age Pension Scheme for financial assistance.</li>
          <li>Government-supported old-age homes and rehabilitation centers.</li>
          <li>Concessions in public transport for senior citizens.</li>
          <li>Free healthcare services and regular medical check-ups in government hospitals.</li>
          <li>Strict laws to prevent elder abuse and ensure their financial security.</li>
          <li>State-run welfare schemes for the maintenance of elderly individuals.</li>
          <li>Special legal aid services for property and inheritance disputes.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act and labor welfare programs.</li>
          <li>Social security benefits and insurance coverage for workers in the unorganized sector.</li>
          <li>Special protection and legal assistance for migrant laborers.</li>
          <li>Skill development programs for better employment opportunities.</li>
          <li>Strict enforcement of workplace safety regulations.</li>
          <li>Financial aid and relief measures for laborers affected by conflict or natural disasters.</li>
          <li>Provision of housing and healthcare benefits for workers in industries and plantations.</li>
        </ul>
      </div>
    </div>},
    { id: 16, name: 'Meghalaya', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Meghalaya</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strong implementation of the Domestic Violence Act with dedicated support services.</li>
          <li>Special legal provisions to safeguard women's land and property rights under the matrilineal system.</li>
          <li>Women’s Commission for addressing grievances related to gender-based violence.</li>
          <li>Employment reservation for women in government jobs and local governance.</li>
          <li>Strict action against human trafficking and gender-based discrimination.</li>
          <li>Financial and legal aid for single mothers and widows.</li>
          <li>Support for women-led Self-Help Groups (SHGs) and financial inclusion programs.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Free and compulsory education under the Right to Education (RTE) Act.</li>
          <li>Mid-Day Meal Scheme for enhancing child nutrition and school enrollment.</li>
          <li>Stringent enforcement against child labor and child trafficking.</li>
          <li>Dedicated Child Protection Units for the rehabilitation of vulnerable children.</li>
          <li>Scholarships and financial aid for students from tribal and economically weaker backgrounds.</li>
          <li>Juvenile Justice Boards to handle cases involving minors.</li>
          <li>Child helpline services for immediate protection against abuse.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Indira Gandhi National Old Age Pension Scheme for elderly financial support.</li>
          <li>State-funded old age homes with medical and recreational facilities.</li>
          <li>Free healthcare services for senior citizens in government hospitals.</li>
          <li>Legal aid support for elderly individuals facing abuse or property disputes.</li>
          <li>Special concessions for senior citizens in public transport and government schemes.</li>
          <li>Welfare programs to promote financial independence and skill-building for elderly citizens.</li>
          <li>Community-based elder support initiatives.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Minimum Wage Act implementation ensuring fair compensation.</li>
          <li>Social security benefits for unorganized and daily wage workers.</li>
          <li>Strict laws against forced labor and unsafe working conditions.</li>
          <li>Skill development programs to enhance employability.</li>
          <li>Welfare measures for construction and coal mine workers.</li>
          <li>Protection and rights awareness programs for migrant laborers.</li>
          <li>Financial assistance and insurance benefits for registered workers.</li>
        </ul>
      </div>
    </div> },
    { id: 17, name: 'Mizoram', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Mizoram</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Implementation of the Protection of Women from Domestic Violence Act with dedicated support services.</li>
          <li>Equal property and land rights for women under tribal customary laws.</li>
          <li>Women’s Commission to address gender-based violence and discrimination.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Strict anti-trafficking measures to protect women from exploitation.</li>
          <li>Financial and legal aid for single mothers and widows.</li>
          <li>Promotion of women-led Self-Help Groups (SHGs) for economic empowerment.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme for improved child nutrition and school enrollment.</li>
          <li>Strict enforcement against child labor and child trafficking.</li>
          <li>State-run child protection homes for vulnerable children.</li>
          <li>Scholarships and financial aid for tribal and economically weaker students.</li>
          <li>Juvenile Justice Boards for handling child-related legal cases.</li>
          <li>24/7 child helpline services for immediate protection.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Old age pension scheme under the National Social Assistance Programme.</li>
          <li>Government-funded old-age homes with medical facilities.</li>
          <li>Free healthcare and medical assistance for senior citizens.</li>
          <li>Legal aid and support services for elderly individuals facing abuse.</li>
          <li>Special transport concessions for senior citizens.</li>
          <li>Community-based welfare programs for elderly care.</li>
          <li>Senior citizen recreational centers for social engagement.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wage Act for fair compensation.</li>
          <li>Social security benefits for unorganized and daily wage workers.</li>
          <li>Strict labor laws against forced labor and unsafe working conditions.</li>
          <li>Skill development programs to improve employability.</li>
          <li>Welfare measures for agricultural and plantation workers.</li>
          <li>Protection and awareness programs for migrant laborers.</li>
          <li>Financial assistance and insurance benefits for registered workers.</li>
        </ul>
      </div>
    </div> },
    { id: 18, name: 'Nagaland', rights:  <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Nagaland</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Protection under the Nagaland State Women’s Commission for gender-related issues.</li>
          <li>Equal land and inheritance rights for women under customary tribal laws.</li>
          <li>Stringent laws against domestic violence and harassment.</li>
          <li>Reservation for women in local bodies and governance.</li>
          <li>Financial aid and entrepreneurship programs for women-led businesses.</li>
          <li>Women’s Self-Help Groups (SHGs) for economic empowerment.</li>
          <li>Government support for victims of domestic violence and trafficking.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Strict laws against child labor and exploitation.</li>
          <li>Mid-Day Meal Scheme for improved child nutrition.</li>
          <li>Scholarships for meritorious and economically weaker students.</li>
          <li>State-supported rehabilitation centers for vulnerable children.</li>
          <li>Child helpline for immediate assistance in cases of abuse or trafficking.</li>
          <li>Implementation of Juvenile Justice laws for child protection.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension schemes for senior citizens under state welfare programs.</li>
          <li>Free and subsidized healthcare services for elderly individuals.</li>
          <li>Old age homes with government support for vulnerable elderly people.</li>
          <li>Legal aid for elderly citizens facing abuse or property disputes.</li>
          <li>Special concessions in public transportation for senior citizens.</li>
          <li>Community support programs for elderly welfare.</li>
          <li>Senior citizen recreation and cultural programs for social engagement.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of Minimum Wages Act for fair wages.</li>
          <li>Strict laws against unfair labor practices and forced labor.</li>
          <li>Welfare programs for agricultural and daily wage workers.</li>
          <li>Skill development initiatives to enhance employability.</li>
          <li>Special legal provisions for laborers in the unorganized sector.</li>
          <li>Protection and rights awareness programs for migrant laborers.</li>
          <li>Social security benefits including insurance and compensation for workers.</li>
        </ul>
      </div>
    </div> },
    { id: 19, name: 'Odisha', rights:<div className="rights-container">
      <h1 className="state-title">Know Your Rights: Odisha</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Mission Shakti initiative to promote women's self-help groups (SHGs).</li>
          <li>Financial aid and micro-financing schemes for women entrepreneurs.</li>
          <li>Strict implementation of the Domestic Violence Act with dedicated helplines.</li>
          <li>Free legal aid for women in distress through Odisha State Legal Services Authority.</li>
          <li>Special reservation for women in government jobs and panchayati raj institutions.</li>
          <li>One-stop crisis centers for victims of violence and harassment.</li>
          <li>Women’s safety programs including SHE Team and Mahila Police Stations.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Implementation of the Right to Education (RTE) Act for free schooling.</li>
          <li>Mid-Day Meal Scheme for improving child nutrition and school attendance.</li>
          <li>Strict laws against child labor and trafficking.</li>
          <li>Scholarship programs for SC/ST and economically weaker students.</li>
          <li>Integrated Child Protection Scheme (ICPS) to safeguard vulnerable children.</li>
          <li>Juvenile justice boards for handling child-related legal cases.</li>
          <li>Dedicated helpline (1098) for child protection and abuse prevention.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Madhu Babu Pension Yojana for elderly financial security.</li>
          <li>Free healthcare services in government hospitals for senior citizens.</li>
          <li>State-run old age homes for abandoned and vulnerable elderly individuals.</li>
          <li>Legal aid and protection against abuse under the Maintenance and Welfare of Parents and Senior Citizens Act.</li>
          <li>Special discounts and concessions in public transportation.</li>
          <li>Community support programs for elderly recreation and social engagement.</li>
          <li>Senior citizen helplines for quick assistance and grievance redressal.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act ensuring fair wages for laborers.</li>
          <li>Odisha Building and Other Construction Workers Welfare Board for worker benefits.</li>
          <li>Social security schemes including pension and accident insurance for laborers.</li>
          <li>Skill development programs under the Chief Minister’s Employment Generation Scheme.</li>
          <li>Strict regulations on workplace safety and occupational hazards.</li>
          <li>Special provisions for unorganized sector workers, including street vendors.</li>
          <li>Legal protection and compensation for injured workers under labor welfare schemes.</li>
        </ul>
      </div>
    </div>},
    { id: 20, name: 'Punjab', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Punjab</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Sakhi One-Stop Centers for women facing violence and abuse.</li>
          <li>Free legal aid and counseling services for women in distress.</li>
          <li>Special reservation for women in government jobs and local governance.</li>
          <li>Beti Bachao Beti Padhao scheme to promote education and empowerment.</li>
          <li>Strict enforcement of laws against dowry, domestic violence, and harassment.</li>
          <li>Financial assistance for widows and single mothers.</li>
          <li>Women safety helpline and Punjab Police’s "Shakti App" for emergency response.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme to improve child nutrition and school retention.</li>
          <li>State-run child welfare committees for orphaned and abandoned children.</li>
          <li>Strict laws against child labor, child trafficking, and abuse.</li>
          <li>Scholarship programs for SC/ST, minority, and underprivileged students.</li>
          <li>Child Protection Units in every district to ensure the safety of children.</li>
          <li>Specialized juvenile justice boards for handling child-related legal cases.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Punjab Senior Citizens’ Pension Scheme for financial assistance.</li>
          <li>Free medical check-ups and healthcare services at government hospitals.</li>
          <li>State-funded old age homes for senior citizens without caregivers.</li>
          <li>Special concessions in public transport and other essential services.</li>
          <li>Maintenance and Welfare of Parents and Senior Citizens Act for legal protection.</li>
          <li>Dedicated helpline for senior citizens to report abuse and seek assistance.</li>
          <li>Social and recreational programs for elderly citizens.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act to ensure fair wages.</li>
          <li>Punjab Building and Other Construction Workers Welfare Board for labor benefits.</li>
          <li>Social security and pension schemes for unorganized sector workers.</li>
          <li>Strict workplace safety regulations to prevent occupational hazards.</li>
          <li>Compensation schemes for workers in case of accidents or workplace injuries.</li>
          <li>Skill development and employment generation programs for laborers.</li>
          <li>Legal aid for resolving labor disputes and employment grievances.</li>
        </ul>
      </div>
    </div> },
    { id: 21, name: 'Rajasthan', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Rajasthan</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Rajasthan Women’s Helpline (181) for immediate assistance.</li>
          <li>Free legal aid and counseling for women facing domestic violence.</li>
          <li>Beti Bachao Beti Padhao scheme to promote female education.</li>
          <li>Mahila Suraksha Evam Salah Kendra for women’s protection.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Special fast-track courts for crimes against women.</li>
          <li>Financial assistance for widows and single mothers under state schemes.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme to improve child nutrition.</li>
          <li>Prohibition of child marriage under the Rajasthan Child Marriage Restraint Act.</li>
          <li>Special juvenile justice boards to protect child rights.</li>
          <li>Scholarships for economically weaker students.</li>
          <li>Child labor prohibition laws with strict enforcement.</li>
          <li>State-run child welfare homes for abandoned and orphaned children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Rajasthan Senior Citizens’ Pension Scheme for financial support.</li>
          <li>Free medical treatment under the Mukhyamantri Nishulk Dava Yojana.</li>
          <li>Old age homes and senior citizen welfare centers.</li>
          <li>Concessional fares for senior citizens in public transport.</li>
          <li>Maintenance and Welfare of Parents and Senior Citizens Act for legal rights.</li>
          <li>Helpline for elderly abuse and legal assistance.</li>
          <li>Special recreational and cultural programs for senior citizens.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act for fair wages.</li>
          <li>Rajasthan Labor Welfare Fund for financial assistance to workers.</li>
          <li>Social security benefits for construction workers.</li>
          <li>Compensation schemes for laborers injured at work.</li>
          <li>Employment generation programs for daily wage workers.</li>
          <li>Strict enforcement of workplace safety regulations.</li>
          <li>Free legal aid for labor disputes and worker grievances.</li>
        </ul>
      </div>
    </div>},
    { id: 22, name: 'Sikkim', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Sikkim</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Women’s Commission to address gender-related issues and legal aid.</li>
          <li>Strict enforcement of laws against domestic violence and harassment.</li>
          <li>Free education for girls up to higher secondary level.</li>
          <li>Women’s self-help groups (SHGs) for financial empowerment.</li>
          <li>Reservation for women in local governance (Panchayati Raj institutions).</li>
          <li>Special maternity benefits and financial assistance for pregnant women.</li>
          <li>Fast-track courts for cases related to crimes against women.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme to provide nutritious food in schools.</li>
          <li>Child protection units to prevent abuse and exploitation.</li>
          <li>Scholarships for children from economically weaker sections.</li>
          <li>Juvenile Justice Board to protect child rights in legal cases.</li>
          <li>Ban on child labor with strict enforcement.</li>
          <li>Child welfare homes and adoption facilities for orphans.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Old Age Pension Scheme for financial assistance to senior citizens.</li>
          <li>Free healthcare and medical services in government hospitals.</li>
          <li>Senior citizen recreation centers for social and cultural activities.</li>
          <li>50% discount on public transport fares for elderly citizens.</li>
          <li>Maintenance and Welfare of Parents and Senior Citizens Act for legal protection.</li>
          <li>Helpline services for senior citizens in distress.</li>
          <li>State-funded old-age homes for homeless senior citizens.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act for fair salaries.</li>
          <li>Social security benefits for unorganized sector workers.</li>
          <li>Compensation for workplace injuries and accidents.</li>
          <li>Free legal aid for labor disputes and worker grievances.</li>
          <li>Strict enforcement of labor laws to prevent exploitation.</li>
          <li>Skill development and vocational training programs.</li>
          <li>State-sponsored insurance schemes for laborers.</li>
        </ul>
      </div>
    </div> },
    { id: 23, name: 'Tamil Nadu', rights:<div className="rights-container">
      <h1 className="state-title">Know Your Rights: Tamil Nadu</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Ammu Amma Scheme providing financial assistance to widows and single mothers.</li>
          <li>Strict enforcement of laws against domestic violence and harassment.</li>
          <li>Free education for girls up to higher secondary level.</li>
          <li>Women’s helpline and special fast-track courts for gender-based violence cases.</li>
          <li>Crèche and daycare facilities for working women under state initiatives.</li>
          <li>50% reservation for women in local governance (Panchayati Raj institutions).</li>
          <li>Financial assistance for women entrepreneurs through government schemes.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-Day Meal Scheme providing nutritious food in schools.</li>
          <li>Chief Minister’s Nutritious Meal Scheme for malnourished children.</li>
          <li>Protection against child labor with strict monitoring and rescue teams.</li>
          <li>Scholarships for students from Scheduled Castes, Scheduled Tribes, and economically weaker sections.</li>
          <li>Child Protection Units to prevent abuse and exploitation.</li>
          <li>Exclusive juvenile justice boards for child-related legal matters.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Old Age Pension Scheme for financial assistance to senior citizens.</li>
          <li>Free healthcare and medical services in government hospitals.</li>
          <li>Maintenance and Welfare of Parents and Senior Citizens Act for legal protection.</li>
          <li>50% discount on public transport fares for elderly citizens.</li>
          <li>Helpline services for senior citizens facing abuse or neglect.</li>
          <li>State-sponsored old-age homes with free medical facilities.</li>
          <li>Free legal aid for senior citizens in property and financial disputes.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act for fair salaries.</li>
          <li>Social security benefits for unorganized sector workers.</li>
          <li>Compensation for workplace injuries and accidents.</li>
          <li>Free legal aid for labor disputes and grievances.</li>
          <li>Strict enforcement of labor laws to prevent exploitation.</li>
          <li>Skill development and vocational training programs.</li>
          <li>State-sponsored insurance schemes for construction and factory workers.</li>
        </ul>
      </div>
    </div> },
    { id: 24, name: 'Telangana', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Telangana</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>SHE Teams initiative to prevent and respond to crimes against women.</li>
          <li>KCR Kit Scheme providing financial aid and essentials for newborns and mothers.</li>
          <li>Women’s self-help groups (SHGs) supported through financial assistance.</li>
          <li>Special fast-track courts for speedy trials in crimes against women.</li>
          <li>Free legal aid and counseling centers for women in distress.</li>
          <li>Mahila Shakti Kendras providing training and employment opportunities for women.</li>
          <li>Stringent enforcement of laws against domestic violence and workplace harassment.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Arogya Lakshmi Scheme providing nutritious food for children and pregnant women.</li>
          <li>Child labor prevention and rehabilitation programs.</li>
          <li>Mid-day meal scheme ensuring proper nutrition in schools.</li>
          <li>Scholarship programs for students from economically weaker sections.</li>
          <li>Exclusive child welfare committees and juvenile justice boards.</li>
          <li>Dedicated helplines and shelters for child abuse victims.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Aasara Pension Scheme providing financial aid to elderly citizens.</li>
          <li>Free medical care and check-ups in government hospitals.</li>
          <li>Special helpline for elderly citizens facing abuse or neglect.</li>
          <li>Old-age homes with free lodging and medical support.</li>
          <li>Legal protection under the Maintenance and Welfare of Parents and Senior Citizens Act.</li>
          <li>Subsidized transportation fares for senior citizens.</li>
          <li>Government welfare programs to ensure the dignity and security of senior citizens.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act to ensure fair pay.</li>
          <li>Registration of construction workers for social security benefits.</li>
          <li>Compensation and insurance schemes for workplace injuries.</li>
          <li>Free legal aid for laborers in disputes and grievances.</li>
          <li>Skill development programs to enhance employability.</li>
          <li>Special protections and benefits for unorganized sector workers.</li>
          <li>Strict enforcement of labor laws to prevent exploitation.</li>
        </ul>
      </div>
    </div>},
    { id: 25, name: 'Tripura', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Tripura</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict implementation of the Protection of Women from Domestic Violence Act.</li>
          <li>Tripura Women’s Commission actively addressing women’s issues.</li>
          <li>Financial aid and self-employment schemes for women entrepreneurs.</li>
          <li>Reservation for women in government jobs and educational institutions.</li>
          <li>Dedicated helpline and one-stop crisis centers for women facing violence.</li>
          <li>Fast-track courts for cases of sexual harassment and gender violence.</li>
          <li>Skill development programs for women under state-sponsored initiatives.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-day meal scheme to improve school attendance and nutrition.</li>
          <li>Scholarship programs for meritorious students from economically weaker sections.</li>
          <li>Strict enforcement of child labor laws with dedicated rehabilitation programs.</li>
          <li>Special juvenile justice system for child protection.</li>
          <li>Child helpline services for abuse and emergency assistance.</li>
          <li>Anganwadi centers providing early childhood education and nutrition.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Tripura Chief Minister's Social Assistance Scheme for senior citizens.</li>
          <li>Free healthcare and medical assistance in government hospitals.</li>
          <li>Old age pension schemes under state social welfare programs.</li>
          <li>Legal aid services to help senior citizens in property and family disputes.</li>
          <li>Senior citizen homes with free food, medical, and recreational facilities.</li>
          <li>Concessional transportation fares for elderly individuals.</li>
          <li>Implementation of the Maintenance and Welfare of Parents and Senior Citizens Act.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Enforcement of the Minimum Wages Act to protect laborers' rights.</li>
          <li>Social security and welfare schemes for unorganized sector workers.</li>
          <li>Financial assistance for construction workers and daily wage earners.</li>
          <li>Workers’ unions actively advocating for labor rights and fair treatment.</li>
          <li>Skill training and employment generation programs.</li>
          <li>State-run insurance and compensation schemes for laborers.</li>
          <li>Strict monitoring of workplace safety regulations.</li>
        </ul>
      </div>
    </div>},
    { id: 26, name: 'Uttar Pradesh', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Uttar Pradesh</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of laws against domestic violence and harassment.</li>
          <li>Women’s helpline (1090) for immediate complaint resolution.</li>
          <li>Fast-track courts for speedy trials of crimes against women.</li>
          <li>Mahila Shakti Kendras providing support and legal assistance.</li>
          <li>Financial aid and self-employment schemes for women entrepreneurs.</li>
          <li>Special reservation for women in government jobs and educational institutions.</li>
          <li>Women police stations for handling gender-related crimes.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-day meal scheme to improve school attendance and nutrition.</li>
          <li>Scholarship programs for students from economically weaker backgrounds.</li>
          <li>Special juvenile justice boards for child protection.</li>
          <li>Strict prohibition of child labor with dedicated rehabilitation programs.</li>
          <li>Bal Shram Vidya Yojana for education of child labor survivors.</li>
          <li>Child helpline (1098) for reporting abuse and emergencies.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Old age pension under the Uttar Pradesh Social Welfare Department.</li>
          <li>Free healthcare services for senior citizens in government hospitals.</li>
          <li>Concessional transportation fares for elderly individuals.</li>
          <li>Senior citizen homes with free food and medical facilities.</li>
          <li>Legal aid services for elderly people facing property and financial issues.</li>
          <li>Implementation of the Maintenance and Welfare of Parents and Senior Citizens Act.</li>
          <li>Special helpline for senior citizens facing abuse or harassment.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act for laborers.</li>
          <li>Social security and welfare schemes for unorganized sector workers.</li>
          <li>Uttar Pradesh Shramik Bharan Poshan Yojana for financial aid to laborers.</li>
          <li>Insurance and pension schemes for construction and daily wage workers.</li>
          <li>Skill development and employment generation programs.</li>
          <li>Compensation schemes for laborers injured at work.</li>
          <li>Strict monitoring of workplace safety regulations.</li>
        </ul>
      </div>
    </div>},
    { id: 27, name: 'Uttarakhand', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: Uttarakhand</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Strict enforcement of laws against domestic violence and harassment.</li>
          <li>Women helpline (181) for emergency support and legal assistance.</li>
          <li>Reservation for women in government jobs and local governance.</li>
          <li>Financial assistance for self-employment under state schemes.</li>
          <li>Fast-track courts for speedy trials of crimes against women.</li>
          <li>Mahila Police volunteers for safety and crime prevention.</li>
          <li>Women self-help groups (SHGs) for financial empowerment.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Right to free and compulsory education under the RTE Act.</li>
          <li>Mid-day meal scheme to improve school attendance and nutrition.</li>
          <li>Scholarship schemes for meritorious and economically weaker students.</li>
          <li>Strict prohibition of child labor and special rehabilitation programs.</li>
          <li>Child helpline (1098) for emergency child protection.</li>
          <li>Juvenile justice boards for handling child-related legal cases.</li>
          <li>Special schemes for education and welfare of orphaned children.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Monthly pension under the Old Age Pension Scheme.</li>
          <li>Free medical facilities for senior citizens in government hospitals.</li>
          <li>Concessional travel in state public transport for elderly individuals.</li>
          <li>State-run old-age homes with free food and healthcare facilities.</li>
          <li>Legal assistance for property and financial disputes involving senior citizens.</li>
          <li>Implementation of the Maintenance and Welfare of Parents and Senior Citizens Act.</li>
          <li>Special helpline for elderly individuals facing abuse or neglect.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act for all categories of workers.</li>
          <li>Social security schemes for unorganized sector laborers.</li>
          <li>Uttarakhand Building and Other Construction Workers Welfare Board benefits.</li>
          <li>Compensation schemes for workplace injuries and accidents.</li>
          <li>Skill development and vocational training programs for laborers.</li>
          <li>Strict monitoring of workplace safety and labor laws.</li>
          <li>Government-run welfare funds for registered workers.</li>
        </ul>
      </div>
    </div> },
    { id: 28, name: 'West Bengal', rights: <div className="rights-container">
      <h1 className="state-title">Know Your Rights: West Bengal</h1>

      <div className="rights-section">
        <h2>Women's Rights</h2>
        <ul>
          <li>Kanyashree Prakalpa scheme for financial assistance to girl students.</li>
          <li>Strict implementation of laws against domestic violence and sexual harassment.</li>
          <li>Reservation for women in government jobs and Panchayati Raj institutions.</li>
          <li>Special women police stations for handling gender-related crimes.</li>
          <li>Self-defense training and safety awareness programs for women.</li>
          <li>Support for women entrepreneurs through micro-financing schemes.</li>
          <li>24x7 women’s helpline (1091) for legal and emergency assistance.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Children's Rights</h2>
        <ul>
          <li>Free and compulsory education under the Right to Education Act.</li>
          <li>Mid-day meal scheme for school children to improve nutrition and attendance.</li>
          <li>Strict enforcement against child labor and human trafficking.</li>
          <li>Sishu Sathi Scheme for free heart surgeries for children.</li>
          <li>Juvenile Justice Boards for cases related to minors.</li>
          <li>Scholarships and financial aid for economically disadvantaged students.</li>
          <li>Child helpline (1098) for reporting abuse and exploitation.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Senior Citizens' Rights</h2>
        <ul>
          <li>Old Age Pension scheme under the Jai Bangla initiative.</li>
          <li>Free healthcare services and specialized geriatric care in government hospitals.</li>
          <li>Concessional travel for senior citizens in state public transport.</li>
          <li>Legal aid services for senior citizens facing abuse or property disputes.</li>
          <li>Maintenance and Welfare of Parents and Senior Citizens Act implementation.</li>
          <li>State-run senior citizen homes with free medical and living facilities.</li>
          <li>Special helpline for elderly support and grievance redressal.</li>
        </ul>
      </div>

      <div className="rights-section">
        <h2>Labor Rights</h2>
        <ul>
          <li>Implementation of the Minimum Wages Act across various labor sectors.</li>
          <li>Samajik Suraksha Yojana for unorganized sector workers.</li>
          <li>Social security benefits for tea garden workers and daily wage laborers.</li>
          <li>Construction Workers Welfare Fund for laborer safety and compensation.</li>
          <li>Employment guarantee schemes like MGNREGA for rural workers.</li>
          <li>Free skill training programs for youth and unemployed workers.</li>
          <li>Strict enforcement of workplace safety laws to prevent industrial accidents.</li>
        </ul>
      </div>
    </div> }
  ];

  // Find the state based on the ID from the URL
  const state = statesData.find((state) => state.id === parseInt(id));

  if (!state) {
    return <h2>State not found</h2>;
  }

  return (
    <div className="state-details">
      <h1>{state.name} - Know Your Rights</h1>
      <p>{state.rights}</p>
      {/* You can add more detailed info here */}
    </div>
  );
};

export default StateDetailsPage;
