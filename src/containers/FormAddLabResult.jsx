import React from 'react';

const jenis = {
    1: 'Urin',
    2: 'Darah',
    3: 'Ludah',
    4: 'Rambut',
    5: 'Feces',
    6: 'Keringat',
    7: 'Nafas'
}

const hasil = {
    1: 'Diabetes',
    2: 'DBD',
    3: 'Dehidrasi',
    4: 'Kanker',
    5: 'Keracunan',
    6: 'Cacar',
    7: 'TBC'
}

export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Add Lab Result</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan<span style={{ color: 'red' }}>*</span></label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" name="jenis">
                    <option value="">Pilih jenis bahan penelitian</option>
                    {Object.keys(jenis).map(key => {
                        return (
                            <option key={key} value={key}>{jenis[key]}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <select className="form-control" name="hasil">
                    <option value="">Pilih hasil penelitian</option>
                    {Object.keys(hasil).map(key => {
                        return (
                            <option key={key} value={key}>{hasil[key]}</option>
                        )
                    })}
                </select>
            </div>
            <button className="btn btn-success" value="submit">Update</button>
        </form>
    )
}