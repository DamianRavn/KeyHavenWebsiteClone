import React from "react"
import {NewsItem} from "../modules/NewsItem";

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            newsObjects:[
                {header: "New Seminar Added @ 19.9.18", body: "Tax Planning 2019 A Two-Silk Afternoon at The Law Society’s Hall, London WC2A \nPlease see Conference Section of the website for full details"},
                {header: "New Article Added to the CLPR @ 19.9.18", body: "CLPR Vol.20.1  'PLUS ÇA CHANGE? THE CASE FOR COMPLEMENTARY AND ALTERNATIVE MEDICINE CHARITIES'  -  Robert Meakin and Peter Jackson-Main @19.9.18 \nPlease see the Reviews Section of the website to view the article"},
                {header: "Two new articles have been added to the ECTJ @ 19.9.18", body: "ECTJ Vol.17.5  'Fiscal State Aid in Infrastructure Projects: The Case of Piraeus Port in Greece' - Dr. Vasiliki Athanasaki.\nECTJ Vol.17.6  'Double Tax Conventions in the Case Law of the CJEU: Some Comments' - Tom O'Shea \nPlease see the Reviews Section of the Key Haven website to view the articles."},
                {header: "Two New Articles added to the TPR @ 29.7.18", body: "Two New Articles have been added to the 'Tax Planning Review Volume 6'\nTPR Vol.6.6 'Motive, Intention and Purpose and the UK's General Anti-Abuse Rule - Dr Selina Keesoony \nTPR Vol.6.7 'Written Evidence' - Keith Gordon \nPlease visit the Reviews Section of the website to view the articles"},
            ]
        }
    }
    
    render()
    {
        return(
            <div>
                <ul className = "list-unstyled">
                    <NewsItem
                    newsObjects = {this.state.newsObjects}
                    />
                </ul>
                
            </div>
        );
    }
    
}
export default Home;