import React from "react";
 import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';
 import CardActionArea from '@mui/material/CardActionArea';


function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
 <Card sx={{ minWidth: 275 }} href="#">
   <CardActionArea href="./PageOne">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Page One
        </Typography>
        
        <Typography variant="body2">
          Go to Page One
          <br />   
        </Typography>

      </CardContent>
    </CardActionArea>
  </Card>
    </div>
  );
}

export default Home;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
    
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card>
//       <CardContent>
//     
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
