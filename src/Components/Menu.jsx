import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ImgMediaCard() {
  const [foodData, setFoodData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewfood');
        setFoodData(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <>
      <br /><br/><br/><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <br /><br/><br/>
        {foodData.map((food) => (
          <Card key={food._id} sx={{ maxWidth: 345, marginBottom: '20px', flex: '1 0 30%' }}>
            <CardMedia
              component="img"
              alt={food.title}
              height="140"
              image={food.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {food.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {food.rate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => addToCart(food)}> <Link to={'/b'} style={{textDecoration:'none',color:'blue'}}>
              BUY
               </Link></Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
