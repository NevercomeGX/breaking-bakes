import Head from "next/head";
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/main_cake.jpg";
import main1 from "../public/main_1.jpg";
import main2 from "../public/main_2.jpg";
import main3 from "../public/main_3.jpg";
import Image from 'next/legacy/image'
import cake1 from "../public/1.jpg";
import cake2 from "../public/2.jpg";
import cake3 from "../public/3.jpg";
import cake4 from "../public/4.jpg";
import cake5 from "../public/5.jpg";
import cake6 from "../public/6.jpg";
import cake7 from "../public/7.jpg";
import cake8 from "../public/8.jpg";
import cake9 from "../public/9.jpg";
import cake10 from "../public/10.jpg";
import dec1 from "../public/dec1.png";
import dec3 from "../public/dec3.png";
import dec2 from "../public/dec2.png";
import dec5 from "../public/dec5.png";
import dec4 from "../public/dec4.png";
import React from "react";


export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	return (
    <div className={darkMode ? "dark" : ""}>
<Head>
<title>Breaking Bakes</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/pastel.ico" />
</Head>

<main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
<section className="min-h-screen">
	<nav className="py-10 mb-12 flex justify-between dark:text-white">
		<a href="/"><h1 className="font-burtons text-xl">Breaking Bakes</h1></a>
		<ul className=" items-center hidden md:flex">
		<li>
			<BsFillMoonStarsFill
			onClick={() => setDarkMode(!darkMode)}
			className=" cursor-pointer text-2xl"
			/>
		</li>
		<li>
			<a
			className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
			href="#"
			>
			Pasteles
			</a>
		</li>
		<li>
			<a
			className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
			href="#"
			>
			Adornos
			</a>
		</li>
		<li>
			<a
			className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
			href="/login"
			>
			Pedidos
			</a>
		</li>
		</ul>
</nav>
<div className="text-center p-10 py-10">
	<h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
	Breaking Bakes
	</h2>
	<h3 className="text-2xl py-2 dark:text-white md:text-3xl">
	Baking & Cake Decoration.
	</h3>
	<p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
	La pastelería online más grande de Republica Dominicana. Ofrecemos una amplia variedad de pasteles y tartas para todos los gustos.

	</p>
	<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 h-1 w-1">
	<AiFillTwitterCircle />
	<AiFillLinkedin />
	<AiFillYoutube />
	</div>
	<div className="mx-auto bg-gradient-to-b from-teal-500 rounded-md w-60 h-60 relative overflow-hidden mt-10 md:h-80 md:w-80">
	 <Image  src={deved} layout="fill" objectFit="cover"  />
	</div>
</div>
</section>
<section>
		<div>
			<h3 className="text-3xl py-1 dark:text-white ">Servicios que ofrecemos</h3>
			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			
¿Estás buscando un lugar para comprar pasteles y postres para una ocasión especial? <span className="text-teal-500">¡STOP!</span>. Ofrecemos una amplia selección de pasteles y 
postres para todas las ocasiones. Todos nuestros pasteles y postres son hechos con ingredientes frescos y de alta calidad. 


			</p>
			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			¡Hacemos que sea fácil para que usted pueda comprar pasteles y postres para cualquier evento!
			</p>
		</div>
		<div className="lg:flex gap-10">
			<div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
			 <Image  src={main1} width={200} height={200} className="rounded-lg object-cover" />
			<h3 className="text-lg font-medium pt-8 pb-2 ">Pasteleria</h3>
			<p className="py-2">
			Todos nuestros productos son elaborados con ingredientes naturales y de la mejor calidad.
			</p>

			</div>
			<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
			 <Image  src={main2} width={200} height={200} className="rounded-lg object-cover" />
			<h3 className="text-lg font-medium pt-8 pb-2 ">Decoracion</h3>
			<p className="py-2">
			Aqui podrás encontrar todo lo que necesitas para decorar pasteles de forma fácil y rápida.
			</p>

			</div>
			<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
			 <Image  src={main3} width={200} height={200} className="rounded-lg object-cover" />
			<h3 className="text-lg font-medium pt-8 pb-2 ">Delivery</h3>
			<p className="py-2">
			Ofrecemos un servicio de entrega a domicilio en toda la ciudad.
			</p>

			</div>
		</div>
	</section>
	<section className="py-10">
		<div>
			<h3 className="text-center uppercase tracking-wide font-semibold text-5xl text-gray-700 dark:text-white">Pasteles</h3>
		</div>
		<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  px-10 rounded-xl">

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake1}/>
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO LIGHT DE PLÁTANO Y MANZANA<br></br></h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>
		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake2} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO CON COBERTURA DE CHOCOLATE</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake3} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO DE SEMILLAS DE CHÍA</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake4} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO MARMOLADO CON FRAMBUESAS</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake5} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO PLUMCAKE DE AGUACATE</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake6} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO DE CHOCOLATE</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake7} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO DE MANZANA<br></br></h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake8} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO DE NARANJA<br></br></h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake9} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO MADEIRA</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={cake10} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black ">BIZCOCHO <br></br>"1, 2, 3"</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>
			
		</div>
	</section>

	<section className="py-10">
		<div>
		<h3 className="text-center uppercase tracking-wide font-semibold text-5xl text-gray-700 dark:text-white">Adornos</h3>
		</div>
		<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap  px-10 rounded-xl">

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={dec1} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black uppercase ">TOPPER de NUmero<br></br></h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>
		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={dec2} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black uppercase ">topper de cocodrilo</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={dec3} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black uppercase ">Topper de oveja negra</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={dec4} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black uppercase ">Topper de perro</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>

		<div className="text-center basis-1/6 flex-1 bg-white rounded-xl px-5 py-10 shadow-lg p-10">
			 <Image  className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src={dec5} />
			<div>
			<h3 className="text-2xl py-1 dark:text-black uppercase">Star Wars Toppers</h3>

			<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
			<br></br><span className="text-teal-500 text-5xl font-bold md:text-3xl"> $50 USD</span>
			</p>
			</div>
		</div>
		</div>
	</section>

	{/* ======================== REALIZA EL PEDIDO DE TU PASTEL ======================== */}

	<section className=" bg-white rounded-xl dark:bg-transparent ">
	<div className="grid">
		<div className="text-2xl text-center uppercase tracking-wide font-semibold text-gray-700 py-10">
			<h1 className="text-center text-5xl py-4 dark:text-white">Realiza el pedido de tu pastel</h1>
			<h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 dark:text-white">Proporcionanos tus datos de contacto</h2>
			</div>
			</div>
			<div className="grid  lg:flex-row lg:flex-wrap  rounded-xl justify-center">
			<div className="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 dark:text-white">Información de envío y facturación</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Nombre</span>
                                <input name="name" className="focus:outline-none px-3" placeholder="Javier " required=""></input>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input name="email" type="email" className="focus:outline-none px-3" placeholder="123@ejemplo.com" required=""></input>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Direccion</span>
                                <input name="address" className="focus:outline-none px-3" placeholder="Distrito nacional"></input>
                            </label>
                            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Ciudad</span>
                                <input name="city" className="focus:outline-none px-3" placeholder="Santo Domingo"></input>
                            </label>
                            <label className="inline-flex w-2/4 border-gray-200 py-3">
                                <span className="text-right px-2">Provincia</span>
                                <input name="state" className="focus:outline-none px-3" placeholder="CA"></input>
                            </label>
                            <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span className="text-right px-2">Pais</span>
                                <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                    <select name="country" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
									<option>Seleccionaa tu pais</option>
									<option value="AF">Afghanistan</option>
									<option value="AX">Aland Islands</option>
									<option value="AL">Albania</option>
									<option value="DZ">Algeria</option>
									<option value="AS">American Samoa</option>
									<option value="AD">Andorra</option>
									<option value="AO">Angola</option>
									<option value="AI">Anguilla</option>
									<option value="AQ">Antarctica</option>
									<option value="AG">Antigua and Barbuda</option>
									<option value="AR">Argentina</option>
									<option value="AM">Armenia</option>
									<option value="AW">Aruba</option>
									<option value="AU">Australia</option>
									<option value="AT">Austria</option>
									<option value="AZ">Azerbaijan</option>
									<option value="BS">Bahamas</option>
									<option value="BH">Bahrain</option>
									<option value="BD">Bangladesh</option>
									<option value="BB">Barbados</option>
									<option value="BY">Belarus</option>
									<option value="BE">Belgium</option>
									<option value="BZ">Belize</option>
									<option value="BJ">Benin</option>
									<option value="BM">Bermuda</option>
									<option value="BT">Bhutan</option>
									<option value="BO">Bolivia</option>
									<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
									<option value="BA">Bosnia and Herzegovina</option>
									<option value="BW">Botswana</option>
									<option value="BV">Bouvet Island</option>
									<option value="BR">Brazil</option>
									<option value="IO">British Indian Ocean Territory</option>
									<option value="BN">Brunei Darussalam</option>
									<option value="BG">Bulgaria</option>
									<option value="BF">Burkina Faso</option>
									<option value="BI">Burundi</option>
									<option value="KH">Cambodia</option>
									<option value="CM">Cameroon</option>
									<option value="CA">Canada</option>
									<option value="CV">Cape Verde</option>
									<option value="KY">Cayman Islands</option>
									<option value="CF">Central African Republic</option>
									<option value="TD">Chad</option>
									<option value="CL">Chile</option>
									<option value="CN">China</option>
									<option value="CX">Christmas Island</option>
									<option value="CC">Cocos (Keeling) Islands</option>
									<option value="CO">Colombia</option>
									<option value="KM">Comoros</option>
									<option value="CG">Congo</option>
									<option value="CD">Congo, Democratic Republic of the Congo</option>
									<option value="CK">Cook Islands</option>
									<option value="CR">Costa Rica</option>
									<option value="CI">Cote D'Ivoire</option>
									<option value="HR">Croatia</option>
									<option value="CU">Cuba</option>
									<option value="CW">Curacao</option>
									<option value="CY">Cyprus</option>
									<option value="CZ">Czech Republic</option>
									<option value="DK">Denmark</option>
									<option value="DJ">Djibouti</option>
									<option value="DM">Dominica</option>
									<option value="DO">Dominican Republic</option>
									<option value="EC">Ecuador</option>
									<option value="EG">Egypt</option>
									<option value="SV">El Salvador</option>
									<option value="GQ">Equatorial Guinea</option>
									<option value="ER">Eritrea</option>
									<option value="EE">Estonia</option>
									<option value="ET">Ethiopia</option>
									<option value="FK">Falkland Islands (Malvinas)</option>
									<option value="FO">Faroe Islands</option>
									<option value="FJ">Fiji</option>
									<option value="FI">Finland</option>
									<option value="FR">France</option>
									<option value="GF">French Guiana</option>
									<option value="PF">French Polynesia</option>
									<option value="TF">French Southern Territories</option>
									<option value="GA">Gabon</option>
									<option value="GM">Gambia</option>
									<option value="GE">Georgia</option>
									<option value="DE">Germany</option>
									<option value="GH">Ghana</option>
									<option value="GI">Gibraltar</option>
									<option value="GR">Greece</option>
									<option value="GL">Greenland</option>
									<option value="GD">Grenada</option>
									<option value="GP">Guadeloupe</option>
									<option value="GU">Guam</option>
									<option value="GT">Guatemala</option>
									<option value="GG">Guernsey</option>
									<option value="GN">Guinea</option>
									<option value="GW">Guinea-Bissau</option>
									<option value="GY">Guyana</option>
									<option value="HT">Haiti</option>
									<option value="HM">Heard Island and Mcdonald Islands</option>
									<option value="VA">Holy See (Vatican City State)</option>
									<option value="HN">Honduras</option>
									<option value="HK">Hong Kong</option>
									<option value="HU">Hungary</option>
									<option value="IS">Iceland</option>
									<option value="IN">India</option>
									<option value="ID">Indonesia</option>
									<option value="IR">Iran, Islamic Republic of</option>
									<option value="IQ">Iraq</option>
									<option value="IE">Ireland</option>
									<option value="IM">Isle of Man</option>
									<option value="IL">Israel</option>
									<option value="IT">Italy</option>
									<option value="JM">Jamaica</option>
									<option value="JP">Japan</option>
									<option value="JE">Jersey</option>
									<option value="JO">Jordan</option>
									<option value="KZ">Kazakhstan</option>
									<option value="KE">Kenya</option>
									<option value="KI">Kiribati</option>
									<option value="KP">Korea, Democratic People's Republic of</option>
									<option value="KR">Korea, Republic of</option>
									<option value="XK">Kosovo</option>
									<option value="KW">Kuwait</option>
									<option value="KG">Kyrgyzstan</option>
									<option value="LA">Lao People's Democratic Republic</option>
									<option value="LV">Latvia</option>
									<option value="LB">Lebanon</option>
									<option value="LS">Lesotho</option>
									<option value="LR">Liberia</option>
									<option value="LY">Libyan Arab Jamahiriya</option>
									<option value="LI">Liechtenstein</option>
									<option value="LT">Lithuania</option>
									<option value="LU">Luxembourg</option>
									<option value="MO">Macao</option>
									<option value="MK">Macedonia, the Former Yugoslav Republic of</option>
									<option value="MG">Madagascar</option>
									<option value="MW">Malawi</option>
									<option value="MY">Malaysia</option>
									<option value="MV">Maldives</option>
									<option value="ML">Mali</option>
									<option value="MT">Malta</option>
									<option value="MH">Marshall Islands</option>
									<option value="MQ">Martinique</option>
									<option value="MR">Mauritania</option>
									<option value="MU">Mauritius</option>
									<option value="YT">Mayotte</option>
									<option value="MX">Mexico</option>
									<option value="FM">Micronesia, Federated States of</option>
									<option value="MD">Moldova, Republic of</option>
									<option value="MC">Monaco</option>
									<option value="MN">Mongolia</option>
									<option value="ME">Montenegro</option>
									<option value="MS">Montserrat</option>
									<option value="MA">Morocco</option>
									<option value="MZ">Mozambique</option>
									<option value="MM">Myanmar</option>
									<option value="NA">Namibia</option>
									<option value="NR">Nauru</option>
									<option value="NP">Nepal</option>
									<option value="NL">Netherlands</option>
									<option value="AN">Netherlands Antilles</option>
									<option value="NC">New Caledonia</option>
									<option value="NZ">New Zealand</option>
									<option value="NI">Nicaragua</option>
									<option value="NE">Niger</option>
									<option value="NG">Nigeria</option>
									<option value="NU">Niue</option>
									<option value="NF">Norfolk Island</option>
									<option value="MP">Northern Mariana Islands</option>
									<option value="NO">Norway</option>
									<option value="OM">Oman</option>
									<option value="PK">Pakistan</option>
									<option value="PW">Palau</option>
									<option value="PS">Palestinian Territory, Occupied</option>
									<option value="PA">Panama</option>
									<option value="PG">Papua New Guinea</option>
									<option value="PY">Paraguay</option>
									<option value="PE">Peru</option>
									<option value="PH">Philippines</option>
									<option value="PN">Pitcairn</option>
									<option value="PL">Poland</option>
									<option value="PT">Portugal</option>
									<option value="PR">Puerto Rico</option>
									<option value="QA">Qatar</option>
									<option value="RE">Reunion</option>
									<option value="RO">Romania</option>
									<option value="RU">Russian Federation</option>
									<option value="RW">Rwanda</option>
									<option value="BL">Saint Barthelemy</option>
									<option value="SH">Saint Helena</option>
									<option value="KN">Saint Kitts and Nevis</option>
									<option value="LC">Saint Lucia</option>
									<option value="MF">Saint Martin</option>
									<option value="PM">Saint Pierre and Miquelon</option>
									<option value="VC">Saint Vincent and the Grenadines</option>
									<option value="WS">Samoa</option>
									<option value="SM">San Marino</option>
									<option value="ST">Sao Tome and Principe</option>
									<option value="SA">Saudi Arabia</option>
									<option value="SN">Senegal</option>
									<option value="RS">Serbia</option>
									<option value="CS">Serbia and Montenegro</option>
									<option value="SC">Seychelles</option>
									<option value="SL">Sierra Leone</option>
									<option value="SG">Singapore</option>
									<option value="SX">Sint Maarten</option>
									<option value="SK">Slovakia</option>
									<option value="SI">Slovenia</option>
									<option value="SB">Solomon Islands</option>
									<option value="SO">Somalia</option>
									<option value="ZA">South Africa</option>
									<option value="GS">South Georgia and the South Sandwich Islands</option>
									<option value="SS">South Sudan</option>
									<option value="ES">Spain</option>
									<option value="LK">Sri Lanka</option>
									<option value="SD">Sudan</option>
									<option value="SR">Suriname</option>
									<option value="SJ">Svalbard and Jan Mayen</option>
									<option value="SZ">Swaziland</option>
									<option value="SE">Sweden</option>
									<option value="CH">Switzerland</option>
									<option value="SY">Syrian Arab Republic</option>
									<option value="TW">Taiwan, Province of China</option>
									<option value="TJ">Tajikistan</option>
									<option value="TZ">Tanzania, United Republic of</option>
									<option value="TH">Thailand</option>
									<option value="TL">Timor-Leste</option>
									<option value="TG">Togo</option>
									<option value="TK">Tokelau</option>
									<option value="TO">Tonga</option>
									<option value="TT">Trinidad and Tobago</option>
									<option value="TN">Tunisia</option>
									<option value="TR">Turkey</option>
									<option value="TM">Turkmenistan</option>
									<option value="TC">Turks and Caicos Islands</option>
									<option value="TV">Tuvalu</option>
									<option value="UG">Uganda</option>
									<option value="UA">Ukraine</option>
									<option value="AE">United Arab Emirates</option>
									<option value="GB">United Kingdom</option>
									<option value="US">United States</option>
									<option value="UM">United States Minor Outlying Islands</option>
									<option value="UY">Uruguay</option>
									<option value="UZ">Uzbekistan</option>
									<option value="VU">Vanuatu</option>
									<option value="VE">Venezuela</option>
									<option value="VN">Viet Nam</option>
									<option value="VG">Virgin Islands, British</option>
									<option value="VI">Virgin Islands, U.s.</option>
									<option value="WF">Wallis and Futuna</option>
									<option value="EH">Western Sahara</option>
									<option value="YE">Yemen</option>
									<option value="ZM">Zambia</option>
									<option value="ZW">Zimbabwe</option>
                                    </select>
                                </div>
                            </label>
                        </fieldset>
                    </section>
                </form>
            </div>
			<div className="rounded-md">
                <section>
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 dark:text-white">Payment Information</h2>
                    <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span className="text-right px-2">Card</span>
                            <input name="card" className="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required=""></input>
                        </label>
                    </fieldset>
                </section>
            </div>
				<p className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 dark:text-white">Elige el sabor(s) </p>
				<fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600 space-y-2">

						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
						<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho light de platano y manzana</label>
						</div>

					<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-1" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-1" className="py-4 ml-2 w-full font-medium">Bizcocho con cobertura de chocolate</label>
						</div>

						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue=""  name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho de semillas de chía</label>
						
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho marmolado con frambuesas</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho plumcake de aguacate</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho de manzana</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full">Bizcocho de naranja</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-fullm">Bizcocho madeira</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full  text-gray-900"> Bizcocho "1, 2, 3"</label>
						</div>
					</fieldset>

				<p className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2 dark:text-white">Elige el adorno(s) </p>
				<fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600 space-y-2">
				<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full"> Topper de numero</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full"> Topper de cocodrilo</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full"> Topper de oveja negra</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full"> Topper de perro</label>
						</div>
						<div className="flex border-b border-gray-200 h-12 py-3 items-center">
							<input id="bordered-checkbox-2" type="checkbox" defaultValue="" name="bordered-checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
							<label htmlFor="bordered-checkbox-2" className="py-4 ml-2 w-full"> Star wars toppers</label>
						</div>
					</fieldset>
				</div>
			<div  className="flex justify-center p-5">
				<button type="submit" onClick="alert('Tu pedido fue enviado')" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Enviar mi pedido</button>
			</div>
		</section>
	</main>

	<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/NevercomeG" className="hover:underline">NevercomeG</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
	</div>
);
}