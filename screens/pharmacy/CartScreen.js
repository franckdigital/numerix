import React, { useState } from "react"
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	Button,
	Modal,
	Alert
} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import BottomTab from '../../components/BottomTab'

const CartScreen = ({navigation}) => {
	const [products, setProducts] = useState([
		{ id: "1", name: "Paracetamol", price: 100 },
		{ id: "2", name: "Litacold", price: 420 },
		{ id: "3", name: "Ibex", price: 600 },
	]);

	const [cart, setCart] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	const removeFromCart = (productId) => {
		const updatedCart = cart.filter((item) => item.id !== productId);
		setCart(updatedCart);
	};

	const calculateTotal = () => {
		return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
	};

	const renderProductItem = ({ item }) => (
		<View style={styles.productItemContainer}>
			<Text style={styles.productItemName}>{item.name}</Text>
			<Text style={styles.productItemPrice}>
				${item.price.toFixed(2)}
			</Text>
			<TouchableOpacity
				style={styles.addButton}
				onPress={() => addToCart(item)}
			>
				<Text style={styles.addButtonText}>Ajouter au panier</Text>
				<Icon name="cart-outline" size={20} color="white" />
			</TouchableOpacity>
		</View>
	);

	const renderCartItem = ({ item }) => (
		
		<View style={styles.cartItemContainer}>
			<View>
				<Text style={styles.cartItemName}>{item.name}</Text>
				<Text style={styles.cartItemPrice}>
					${item.price.toFixed(2)}
				</Text>
			</View>
			<TouchableOpacity
				style={styles.removeButton}
				onPress={() => removeFromCart(item.id)}
			>
				<Icon name="trash-outline" size={20} color="white" />
			</TouchableOpacity>
		</View>
	);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleCheckout = () => {
		/*
		if (cart.length === 0) {
			toggleModal();
		} else {
			toggleModal();
		}
		*/
		Alert.alert("All Done!", "You have successfully registered.", [{text: "OK", onPress: () => {navigation.navigate('Home')}}])
	};

	return (
		<View style={styles.container}>
			<View style={{margin: 20}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
				<Icon name="arrow-back-circle" size={32} color={"#0857de"} />
				</TouchableOpacity>
			</View>
			<Text style={styles.heading}>Mon panier</Text>

				<FlatList
					data={products}
					keyExtractor={(item) => item.id}
					renderItem={renderProductItem}
				/>

				<View style={styles.cartContainer}>
					<Text style={styles.cartHeading}>Panier</Text>
					{cart.length === 0 ? (
						<Text style={styles.emptyCartMessage}>
							Ajouter votre sélection au panier
						</Text>
					) : (
						<FlatList
							data={cart}
							keyExtractor={(item) => item.id}
							renderItem={renderCartItem}
						/>
					)}
					<View style={styles.totalContainer}>
						<Text style={styles.totalText}>
							Total: {calculateTotal()} FCFA
						</Text>
						<TouchableOpacity
							style={styles.checkoutButton}
							onPress={handleCheckout}
						>
							<Text style={styles.checkoutButtonText}>
								Finaliser
							</Text>
						</TouchableOpacity>
					</View>

				</View>
	
				<View style={{top: 90}}>
					<BottomTab/>
				</View>
			
			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={toggleModal}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalText}>
							{cart.length === 0
			? "Add at least one product to the cart before proceeding."
			: "Congratulations! Your order is placed successfully."}
									</Text>
									<Button title="Fermer" onPress={toggleModal} />
								</View>
							</View>
						</Modal>
					</View>
				)
			}
					
			

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
		color: "#333",
	},
	productItemContainer: {
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: "#fff",
		padding: 15,
		elevation: 3,
	},
	productItemName: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#333",
	},
	productItemPrice: {
		fontSize: 16,
		marginBottom: 10,
		color: "#666",
	},
	addButton: {
		backgroundColor: "#4caf50",
		padding: 10,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	addButtonText: {
		color: "white",
		marginRight: 5,
	},
	cartContainer: {
		marginTop: 20,
	},
	cartHeading: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
		textAlign: "center",
		color: "#333",
	},
	cartItemContainer: {
		borderRadius: 10,
		backgroundColor: "#fff",
		padding: 15,
		elevation: 3,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	cartItemName: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#333",
	},
	cartItemPrice: {
		fontSize: 14,
		color: "#666",
	},
	removeButton: {
		backgroundColor: "#e53935",
		padding: 10,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	totalContainer: {
		marginTop: 10,
		alignItems: "flex-end",
	},
	totalText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},

	cartItemContainer: {
		borderRadius: 10,
		backgroundColor: "#fff",
		padding: 15,
		elevation: 3,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	checkoutButton: {
		backgroundColor: "#2196F3",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 10,
	},
	checkoutButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},

	checkoutButton: {
		backgroundColor: "#2196F3",
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 10,
	},
	checkoutButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
		elevation: 5,
		alignItems: "center",
	},
	modalText: {
		fontSize: 18,
		marginBottom: 20,
		textAlign: "center",
	},

	emptyCartMessage: {
		fontSize: 16,
		textAlign: "center",
		marginVertical: 10,
	},
});

export default CartScreen;
