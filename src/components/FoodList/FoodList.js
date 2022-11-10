import { useState } from "react"
import { Alert, Button, Col, Container, Row } from "react-bootstrap"
import foodsData from "../../foods.json"
import AddFood from "../AddFood/AddFood"
import FoodBox from "../FoodBox/FoodBox"
import SearchForm from "../SearchForm/SearchForm"

function FoodList() {
    const [foods, setFoods] = useState(foodsData)

    //useState do search fica junto com a lista de elementos original
        //estado da barra de busca, para enviar foods por props
    const [search, setSearch] = useState("")

    //sempre que quiser monitorar o comportamento de algo, useState
    const [showForm, setShowForm] = useState(false)

    //função delete do botão
    const deleteFood = (selectedFood) => {
        setFoods(foods.filter((food) => {
            return selectedFood !== food.name
        }))

    }
    

    //passar a informação dos itens do array em AddFoods
        //por meio de props 
    const foodMap = foods
        .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
        .map((food, index) => {
            return <Col key={ index }><FoodBox food={ food } deleteFood={ deleteFood }/></Col>
    })

    return (
        <Container>
            <Row className="my-3">
                <Col>
                    <SearchForm 
                        search={ search } 
                        setSearch={ setSearch }                        
                    />
                </Col>
                <Col>
                    { showForm && <AddFood foods= {foods} setFoods={ setFoods } />}
                    
                    <Button variant="outline-info" onClick={() => setShowForm(!showForm) }>Show/Hide Form</Button>{' '}
                </Col>
            </Row>
            <Row>
                { foodMap }
                { foods.length === 0 && <Alert variant="warning">Ooops! There's no content to show.</Alert> }
                
            </Row>
        </Container>
    )
}

export default FoodList