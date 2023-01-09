import { Box, Card, CardContent, CardMedia, Paper } from "@mui/material";

export default function Banner(props) {
    return(
        <Card sx={{marginX: 6, marginY: 1, height: '90%'}} justifyContent='center'>
            <Box sx={{background: `url(${props.image})`, backgroundSize: 'cover',  height:'100%'}} justifyContent='center'>
                <CardContent sx={{padding: 2}}>
                    {props.children}
                </CardContent>
            </Box>
        </Card>
    )
}