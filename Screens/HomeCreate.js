// Formik x React Native example
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik, useFormik } from 'formik';
import { View, Text, Form, Label, Item, Input } from 'native-base';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


export default function HouseCreate(){
  
  const { values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      city: '',
      pronince: '',
      price: '',
      type: '',
      rooms: '',
      people: '',
    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));
    },
  })};

  return (
    <form>
      <Item>
        <Label>City</Label>
        <Input value={values.city} onChangeText={text => setFieldValue('city', text)}></Input>
      </Item>
      <Item>
        <Label>Province</Label>
        <Input value={values.province} onChangeText={text => setFieldValue('province', text)}></Input>
      </Item>
      <Item>
        <Label>Price</Label>
        <Input value={values.price} onChangeText={text => setFieldValue('price', text)}></Input>
      </Item>
      <Item>
        <Label>Type</Label>
        <Input value={values.type} onChangeText={text => setFieldValue('type', text)}></Input>
      </Item>
      <Item>
        <Label>Rooms</Label>
        <Input value={values.rooms} onChangeText={text => setFieldValue('rooms', text)}></Input>
      </Item>
      <Item>
        <Label>People</Label>
        <Input value={values.city} onChangeText={text => setFieldValue('people', text)}></Input>
      </Item>
    </form> 
  )
