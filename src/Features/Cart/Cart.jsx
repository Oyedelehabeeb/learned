import { usePaystackPayment } from "react-paystack";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../../Services/apiCourses";
import { useCart } from "./useCart";
import Loader from "./../../Ui/Loader";
import CartItems from "./CartItems";
import { useSession } from "../../Services/useSession";
import { FaShoppingCart } from "react-icons/fa"; // Changed icon to cart

function Cart() {
  const { cart, isLoading: cartLoading } = useCart();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: session = {},
    isLoading: emailLoading,
    error: emailError,
  } = useSession();

  const userEmail = session?.user?.email;
  const userId = session?.user?.id;

  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  const config = {
    reference: new Date().getTime().toString(),
    email: userEmail || "",
    amount: totalPrice * 100,
    currency: "NGN",
    publicKey: "pk_test_1bde9b7c0a0f41e7120351a621af17e651dd99f6",
    metadata: {
      userId,
      cartItems: cart.map((item) => item.id),
    },
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = async () => {
    try {
      const cartItemIds = cart.map((item) => item.id);
      await clearCart(cartItemIds);
      await queryClient.invalidateQueries(["cart"]);
      await queryClient.invalidateQueries(["myLearning"]);

      toast.success("Payment successful! Your cart has been cleared.");
      navigate("/mylearning");
    } catch {
      toast.error("Error processing your purchase. Please contact support.");
    }
  };

  const onClose = () => {
    toast.error("Payment was cancelled");
  };

  const handleCheckout = () => {
    if (!userEmail) {
      toast.error("Please log in to proceed with payment");
      return;
    }
    if (!cart.length) {
      toast.error("Your cart is empty");
      return;
    }

    initializePayment(onSuccess, onClose);
  };

  if (cartLoading || emailLoading) return <Loader />;

  if (emailError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-red-600">
          Failed to load user data. Please log in.
        </h2>
        <Link to="/login" className="mt-4 text-blue-600 hover:underline">
          Go to Login
        </Link>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center p-24 h-screen">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <Link to="/courses" className="mt-4 text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-3xl font-bold text-center mb-8 flex items-center justify-center space-x-4">
        <FaShoppingCart className="text-4xl" />{" "}
        {/* Cart icon with proper size */}
        <span>Cart</span>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        {cart.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
        <div className="mt-8 p-4 border rounded-md shadow-md">
          <h2 className="text-xl font-bold">Total: ₦{totalPrice.toFixed(2)}</h2>
          <button
            onClick={handleCheckout}
            disabled={!userEmail || cart.length === 0}
            className={`mt-4 w-full px-4 py-3 rounded-md ${
              !userEmail || cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-white`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
