import React, { Component } from 'react';
import Select from 'react-select';



class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const categorie = [
            { label: "Plomberie", value: 1 },
            { label: "Menuisier", value: 2 },
            { label: "Electricien", value: 3 },
            { label: "Maçon", value: 4 },
            { label: "Charpentier", value: 5 },
            { label: "Chauffagiste", value: 6 },
            { label: "Mécanicien", value: 7 },
            { label: "Vitrier", value: 8 },
            { label: "Forgeron", value: 9 },
        ];
        const emplacement = [
            { label: "Tunis", value: 1 },
            { label: "Ariana", value: 2 },
            { label: "Ben Arous", value: 3 },
            { label: "Kef", value: 4 },
            { label: "Jandouba", value: 5 },
            { label: "Sousse", value: 6 },
            { label: "Monastir", value: 7 },
            { label: "Sfax", value: 8 },
            { label: "Mahdia", value: 9 },
            { label: "Jerba", value: 10 },
        ];


        return (
            <form className="S_bar">
                <div className="categorie_button col-md-4">
                    <div className=" lab col-md-12">Catégorie</div>
                    <div className="col-md-12">
                        <Select options={categorie} placeholder=" Choisir la catégorie " />
                    </div>
                </div>
                <div className="emplacement_button col-md-4">
                    <div className=" lab col-md-12">Emplacement</div>
                    <div className="col-md-12">
                        <Select options={emplacement} placeholder=" Choisir l'emplacement " />
                    </div>
                </div>
                <div className=" lab col-md-4">
                    <button className="search_button" type="submit" value="Submit">OK</button>
                </div>

            </form>

        
        );
    }
}

export default Searchbar;
