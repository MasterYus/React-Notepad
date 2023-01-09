
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Banner from '../../design/components/banner';
import NoteCard from '../../design/components/noteCard';
import { Skeleton } from '@mui/material';
import NoteEditor from '../../design/components/noteEditor';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import bannerImage1 from '../../design/static/img/banner.png'
import bannerImage2 from '../../design/static/img/banner2.jpg'
import data from '../../generated.json';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function NotepadPage() {
    const [editor, setEditorState] = useState({
        open: false,
        note: null
    });

    const openEditor = (note) => {
        setEditorState({open: true, note: note})
    }

    const closeEditor = () => {
        setEditorState({open: false})
    }

    return (
        <>
            <Grid container alignContent='center' direction='row' paddingBottom={12} xs={12} sx={{overflowX: 'hidden'}}>
                <TitleSection />
                <BannersSection />
                <NotepadSection onEditClick={openEditor} />
            </Grid>
            <AppBarSection onFabClick={openEditor} />
            <NoteEditor onClose={closeEditor} note={editor.note} open={editor.open} />
        </>
    )
}

function TitleSection() {
    return (
        <Grid xs={12} paddingTop={6} paddingBottom={4}>
            <Typography variant='h5' align='center'>
                Мой список заметок
            </Typography>
        </Grid>
    )
}

function BannersSection() {
    return (
        <Grid xs={12}>
            <AutoPlaySwipeableViews interval={8000} enableMouseEvents>
                <Banner image={bannerImage1}>
                    <Typography variant='h6' color='common.white'>
                        Заметка дня 
                    </Typography>
                    <Typography variant='subtitle2' color='common.white'>
                        {new Date().toLocaleDateString()} 
                    </Typography>
                    <Typography variant='body1' align='justify' color='common.white'>
                        Прежде всего, новая модель организационной деятельности является качественно новой ступенью направлений прогрессивного развития. Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть объективно рассмотрены соответствующими инстанциями. С другой стороны, дальнейшее развитие различных форм деятельности требует анализа вывода текущих активов.
                    </Typography>
                </Banner>
                <Banner image={bannerImage2}>
                    <Typography variant='h6' color='common.white'>
                        Цитата дня 
                    </Typography>
                    <Typography variant='body1' align='justify' color='common.white'>
                    «Чувство юмора — единственное божественное качество человека». <br/> Артур Шопенгауэр
                    </Typography>
                </Banner>
            </AutoPlaySwipeableViews>
        </Grid>
    )
}

function NotepadSection(props) {
    const [notes, setNotes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setNotes(result);
                },
                (error) => {
                    setLoaded(true)
                    setNotes(data)
                    console.error(error)
                }
            )
    }, [])

    if (!loaded) {
        return (
            <Grid container xs={12} padding={6} spacing={4} alignContent='center'>
                {[...Array(6)].map( () =>
                    <Grid xs={12} sm={6} md={3}>
                        <Skeleton height={300} />
                    </Grid>
                )}
            </Grid>
        )
    } else {
        return (
            <Grid container xs={12} padding={6} spacing={4} alignContent='center'>
                { notes.map( (note) => (
                    <Grid xs={12} sm={6} md={3} justifyContent='center'>
                        <NoteCard onEditClick = {props.onEditClick} note={note} />
                    </Grid>
                ))}
            </Grid>
        )
    }
}

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

function AppBarSection(props) {
    const onClick = () => {
        props.onFabClick(null)
    }

    return (
        <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
                <IconButton color="inherit" aria-label="open drawer">
                    <MenuIcon />
                </IconButton>
                <StyledFab color="primary" aria-label="add" onClick={onClick}>
                    <AddIcon />
                </StyledFab>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <MoreIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
