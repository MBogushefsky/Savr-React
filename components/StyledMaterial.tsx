import * as React from 'react';
import { Button, Card, Divider, List, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export function MCard(props: any) {
    return <Card {...props} 
          onPress={()=>{}} 
          onLongPress={()=>{}} 
          style={[styles.card, props.style]}>
          {props.children}
      </Card>;
}

export function MCardContent(props: any) {
    return <Card.Content {...props} 
          style={[styles.cardContent, props.style]}>
          {props.children}
      </Card.Content>;
}

export function MCardActions(props: any) {
    return <Card.Actions {...props} 
          style={[styles.cardActions, props.style]}>
          {props.children}
      </Card.Actions>;
}

export function MListSection(props: any) {
    return <List.Section {...props} 
          style={[props.style, styles.listSection]}>
          {props.children}
      </List.Section>;
}

export function MListItem(props: any) {
    return <List.Item {...props} 
          style={[styles.listItem, props.style]}>
          {props.children}
      </List.Item>;
}

export function MDivider(props: any) {
    return <Divider {...props} 
          style={[styles.divider, props.style]}>
          {props.children}
      </Divider>;
}

export function MTextInput(props: any) {
    return <TextInput {...props} underlineColor="transparent"
          style={[styles.textInput, props.style]}>
          {props.children}
      </TextInput>;
}

export function MPrimaryButton(props: any) {
    return <Button {...props} mode="contained" theme={{ roundness: 0, ...props.theme }}
          style={[styles.primaryButton, props.style]}
          contentStyle={[styles.buttonContent, props.contentStyle]}>
          {props.children}
      </Button>;
}

export function MSecondaryButton(props: any) {
    return <Button {...props} mode="contained" theme={{ roundness: 0, ...props.theme }}
          style={[styles.secondaryButton, props.style]}
          contentStyle={[styles.buttonContent, props.contentStyle]}>
          {props.children}
      </Button>;
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        marginVertical: 5,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5
    },
    cardContent: {
        paddingHorizontal: 0
    },
    cardActions: {
        padding: 0,
        flexDirection: 'column',
        overflow: 'hidden'
    },
    listSection: {
    },
    divider: {
        marginVertical: 5,
        height: 1,
        width: '100%'
    },
    textInput: {
        backgroundColor: 'white'
    },
    primaryButton: {
        width: '100%',
        justifyContent: 'center'
    },
    secondaryButton: {
        width: '100%',
        backgroundColor: '#3dc2ff',
        justifyContent: 'center'
    },
    buttonContent: {
        height: '100%'
    },
    listItem: {
        height: 50,
        marginVertical: 5
    },
    viewCentered: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center'
    },
});