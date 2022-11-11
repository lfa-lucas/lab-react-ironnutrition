import "./FoodBox.css"
import { Button, Card } from "react-bootstrap";



function FoodBox({ food, deleteFood }) {


  return (


    <Card style={{ width: '18rem' }}>    
      <Card.Header>{ food.name }</Card.Header>
    <Card.Body>
      <Card.Img className="img-food-card" variant="top" src={ food.image } />
      <Card.Text>Calories: { food.calories }</Card.Text>
      <Card.Text>Servings: { food.servings }</Card.Text>
      <Card.Text>Total Calories: { food.calories * food.servings } Kcal</Card.Text>
      <Button variant="danger" onClick={ () => deleteFood(food.name) }> Excluir a refeição </Button>
    </Card.Body>
  </Card>



  )  
}

export default FoodBox