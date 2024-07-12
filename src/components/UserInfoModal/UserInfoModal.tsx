import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useRef, useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from '../../app/features/counter/counterSlice'
import './index.css'

interface FormData {
    name: string;
    gender: string;
    about: string;
}



function UserInfoModal() {
    const toast = useToast()
    const dispatch = useDispatch();

    // Formik 

    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            about: ""
        },
        onSubmit: (values) => {
        console.log("Form submitted:", values);
        dispatch(setUserInfo(values))
        toast({
          title: 'Information Saved.',
          description: "We've saved your information.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        onClose()
        },
        });




    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(() => {
        onOpen()
    }, [onOpen])

    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <form className='formContainer' onSubmit={formik.handleSubmit} >

                        <ModalHeader>Let's start fill your information</ModalHeader>
                        {/* <ModalCloseButton /> */}
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel>Your name</FormLabel>
                                <Input ref={initialRef}
                                    placeholder='First name'
                                    // value={formData.name}
                                    value={formik.values.name}
                                    name='name'
                                    onChange={formik.handleChange}

                                    />
                            </FormControl>

                            <FormControl isRequired mt={4}>
                                <FormLabel>Gender</FormLabel>
                                <Select
                                    placeholder='Select Gender'
                                    // value={formData.gender}
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}

                                    name='gender'
                                    >
                                    <option>Male</option>
                                    <option>Female</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired mt={4}>
                                <FormLabel>About</FormLabel>
                                <Textarea placeholder='Here is a sample placeholder'
                                    // value={formData.about}
                                    value={formik.values.about}
                                    onChange={formik.handleChange}
                                    name='about'
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel (Use Default Info)</Button>
                        </ModalFooter>
                    </form>

                </ModalContent>
            </Modal>
        </>
    )
}

export default UserInfoModal;