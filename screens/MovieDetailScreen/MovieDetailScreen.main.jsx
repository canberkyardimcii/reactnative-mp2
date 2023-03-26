import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import MovieListScreen from "../MovieListScreen/MovieListScreen.main";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        {/* /* <Image source={{uri: movieItem.posterurl}}/> */ }
        <Image style={{ alignSelf: 'center', height: 300, width: 150, resizeMode: "contain" }} source={{uri: route.params.movieItem.posterurl}}/>
        <Text style={styles.h1}> {route.params.movieItem.title} </Text>
        <Text style={styles.h2}>Released {route.params.movieItem.year}</Text> 
        <Text style={styles.h2}>{route.params.movieItem.genres.join(', ')}</Text>  
        <Text style={styles.h2}>{route.params.movieItem.actors.join(', ')}</Text>  
        <Text style={styles.h4}>{route.params.movieItem.storyline}</Text>  






      </ScrollView>
    </SafeAreaView>
  );
}
