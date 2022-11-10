import { useState } from "react"
import { Button, Form } from "react-bootstrap"


function AddFood({ foods, setFoods}) {
    const [form, setForm] = useState({
        name: "",
        calories: "",
        image: "",
        servings: ""
    })

    const handleChange = (e) => {
        // evento que a cada mudança ele captura o nome (name) do input
            // por meio do nome ele captura o valor (value) do input
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFoods([...foods, form])

        setForm({
            name: "",
            calories: "",
            image: "",
            servings: ""
        })
    }


    return (
        <Form onSubmit={ handleSubmit }>
      <Form.Group className="mb-3">
            <Form.Label>Food name</Form.Label>
            <Form.Control
                type="text"
                placeholder="type food name"
                name="name"
                onChange= { handleChange }
                value={ form.name }
            />            
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Label>Calories</Form.Label>
            <Form.Control
                type="text"
                placeholder="Calories"
                name="calories"
                onChange= { handleChange }
                value={ form.calories }
            />            
      </Form.Group>
      <Form.Group className="mb-3">
            <Form.Label>Image address</Form.Label>
            <Form.Control
                type="text"
                placeholder="image address"
                name="image"
                onChange= { handleChange }
                value={ form.image }
            />            
      </Form.Group>
      <Form.Group className="mb-3">
            <Form.Label>Servings</Form.Label>
            <Form.Control
                type="text"
                placeholder="Servings"
                name="servings"
                onChange= { handleChange }
                value={ form.servings }
            />            
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )

    
}

export default AddFood