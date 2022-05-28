import { sound } from "../sounds/sounds";



const size = '108x81';
const format = 'png';

const countries = [
	{
		flag: `https://flagcdn.com/${size}/us.${format}`,
		country: "American",
		sound: sound.American
	},
	{
		flag: `https://flagcdn.com/${size}/gb.${format}`,
		country: "British",
		sound: sound.British

	},
	{
		flag: `https://flagcdn.com/${size}/ca.${format}`,
		country: "Canadian"
	},
	{
		flag: `https://flagcdn.com/${size}/cn.${format}`,
		country: "Chinese"
	},
	{
		flag: `https://flagcdn.com/${size}/hr.${format}`,
		country: "Croatian"
	},
	{
		flag: `https://flagcdn.com/${size}/nl.${format}`,
		country: "Dutch",
		sound: sound.Dutch
	},
	{
		flag: `https://flagcdn.com/${size}/eg.${format}`,
		country: "Egyptian"
	},
	{
		flag: `https://flagcdn.com/${size}/fr.${format}`,
		country: "French",
		sound: sound.French
	},
	{
		flag: `https://flagcdn.com/${size}/gr.${format}`,
		country: "Greek"
	},
	{
		flag: `https://flagcdn.com/${size}/in.${format}`,
		country: "Indian",
		sound: sound.Indian
	},
	{
		flag: `https://flagcdn.com/${size}/ie.${format}`,
		country: "Irish"
	},
	{
		flag: `https://flagcdn.com/${size}/it.${format}`,
		country: "Italian",
		sound: sound.Italian
	},
	{
		flag: `https://flagcdn.com/${size}/jm.${format}`,
		country: "Jamaican"
	},
	{
		flag: `https://flagcdn.com/${size}/jp.${format}`,
		country: "Japanese",
		sound: sound.Japanese
	},
	{
		flag: `https://flagcdn.com/${size}/ke.${format}`,
		country: "Kenyan"
	},
	{
		flag: `https://flagcdn.com/${size}/my.${format}`,
		country: "Malaysian"
	},
	{
		flag: `https://flagcdn.com/${size}/mx.${format}`,
		country: "Mexican"
	},
	{
		flag: `https://flagcdn.com/${size}/ma.${format}`,
		country: "Moroccan"
	},
	{
		flag: `https://flagcdn.com/${size}/pl.${format}`,
		country: "Polish",
		sound: sound.Polish
	},
	{
		flag: `https://flagcdn.com/${size}/pt.${format}`,
		country: "Portuguese"
	},
	{
		flag: `https://flagcdn.com/${size}/ru.${format}`,
		country: "Russian",
		sound: sound.Unitaz
	},
	{
		flag: `https://flagcdn.com/${size}/es.${format}`,
		country: "Spanish"
	},
	{
		flag: `https://flagcdn.com/${size}/th.${format}`,
		country: "Thai"
	},
	{
		flag: `https://flagcdn.com/${size}/tn.${format}`,
		country: "Tunisian"
	},
	{
		flag: `https://flagcdn.com/${size}/tr.${format}`,
		country: "Turkish"
	},
	{
		flag: `https://flagcdn.com/${size}/vn.${format}`,
		country: "Vietnamese",
		sound: sound.Vietnamese
	}
]
const getAllCountries = () => {
	return countries
}
const getCountryByName = (countryName) => {
	return countries.filter(item => item.country === countryName)[0]
}

export { getAllCountries, getCountryByName }