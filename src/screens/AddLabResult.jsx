import React from 'react';
import { Loading } from '../components/Loading';
import { FormAddLabResult } from '../containers/FormAddLabResult';
import { Appointment } from '../utils/Appointment';

export class AddLabResult extends React.Component {
	/** 
	 * TODO: Akses method getDetailPasien(idPasien) pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			pasien: {},
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)

		Appointment.getDetailPasien(this.props.match.params.id).then(response => {
			if(response.status === 200) {
				this.setState({
					loading: false,
					pasien: response.result
				})
			} else {
				alert('Data tidak ditemukan')
				this.props.history.push('all-pasien')
			}
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		/** 
		 * TODO: Akses method updateStatusPasien(requestBody) pada Appointment dan lakukan update state. 
		 */
		this.setState({
			loading: true
		})

		const data = new FormData(e.target)
		const dataJson = {}

		data.forEach((val,key) => {
			if(val !== "") {
				if(key === "id") {
					const jsonId = {}
					jsonId["id"] = val
					dataJson["pasien"] = jsonId
				} else {
					dataJson[key] = val
				}
			}
		})

		Appointment.addLabResult(dataJson).then(response => {
			if(response.status === 200) {
				this.setState({
					loading: false
				})
				alert(`Sukses tambah hasil lab pasien ${this.state.pasien.nama}`)
			} else {
				this.setState({
					loading:false
				})
				alert(`Gagal tambah hasil lab pasien ${this.state.pasien.nama}`)
			}
		})
	}

	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormAddLabResult pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}