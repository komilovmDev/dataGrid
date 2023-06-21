import React, { useState } from 'react';
import './addGroup.css'

export default function AddGroup() {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        kursNomi: '',
        guruhNomi: '',
        bolalarSoni: '',
        oqtuvchi: '',
        boshlanishVaqti: '',
        tugashVaqti: '',
        kursBoshlanishSanasi: '',
        kursTugashSanasi: '',
        xonaRaqami: '',
        narxi: '',
        PulOladiganOyniKiritish: ''
    });

    const [selectedOqtuvchi, setSelectedOqtuvchi] = useState('');
    const [data, setData] = useState([
        {
            kursNomi: 'Frontend',
            guruhNomi: 'Frontend-678',
            bolalarSoni: 10,
            oqtuvchi: 'Jalol Imamdinov',
            boshlanishVaqti: '13:00',
            tugashVaqti: '16:00',
            kursBoshlanishSanasi: '2023-07-01',
            kursTugashSanasi: '2023-12-30',
            xonaRaqami: '5',
            narxi: 1500000,
            PulOladiganOyniKiritish: '2033-23-23'
        },
    ]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCourse = {
            kursNomi: formData.kursNomi,
            guruhNomi: formData.guruhNomi,
            bolalarSoni: formData.bolalarSoni,
            oqtuvchi: selectedOqtuvchi,
            boshlanishVaqti: formData.boshlanishVaqti,
            tugashVaqti: formData.tugashVaqti,
            kursBoshlanishSanasi: formData.kursBoshlanishSanasi,
            kursTugashSanasi: formData.kursTugashSanasi,
            xonaRaqami: formData.xonaRaqami,
            narxi: formData.narxi,
            PulOladiganOyniKiritish: formData.PulOladiganOyniKiritish,
        };

        setData((prevData) => [...prevData, newCourse]);

        setModalOpen(false);
        setFormData({
            kursNomi: '',
            guruhNomi: '',
            bolalarSoni: '',
            oqtuvchi: '',
            boshlanishVaqti: '',
            tugashVaqti: '',
            kursBoshlanishSanasi: '',
            kursTugashSanasi: '',
            xonaRaqami: '',
            narxi: '',
            PulOladiganOyniKiritish: ''
        });
    };


    return (
        <div className='addgroup'>
            <button onClick={() => setModalOpen(true)} id='plus'>Malumot qo'shish</button>

            {modalOpen && (
                <div className='modal'>
                    <div className="close" onClick={() => setModalOpen(false)}></div>
                    <div className="modal-content">
                        <h2>Malumot qo'shish</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Kurs nomi:
                                <select
                                    name="kursNomi"
                                    value={formData.kursNomi}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Tanlang</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Android">Android</option>
                                    {/* Qolgan kurs nomlari */}
                                </select>
                            </label>
                            <label>
                                Guruh nomi:
                                <input
                                    type="text"
                                    name="guruhNomi"
                                    value={formData.guruhNomi}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Bolalar soni:
                                <input
                                    type="number"
                                    name="bolalarSoni"
                                    value={formData.bolalarSoni}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                O'qtuvchi:
                                <select
                                    name="oqtuvchi"
                                    value={selectedOqtuvchi}
                                    onChange={(event) => setSelectedOqtuvchi(event.target.value)}
                                >
                                    <option value="">Tanlang</option>
                                    <option value="Jalol Imomadinov">Jalol Imomadinov</option>
                                    <option value="Zohidjon Ozadov">Zohidjon Ozadov</option>
                                    <option value="Dilshod Abdullayev">Dilshod Abdullayev</option>
                                </select>
                            </label>
                            <label>
                                Boshlanish vaqti:
                                <input
                                    type="time"
                                    name="boshlanishVaqti"
                                    value={formData.boshlanishVaqti}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Tugash vaqti:
                                <input
                                    type="time"
                                    name="tugashVaqti"
                                    value={formData.tugashVaqti}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Kurs boshlanish sanasi:
                                <input
                                    type="date"
                                    name="kursBoshlanishSanasi"
                                    value={formData.kursBoshlanishSanasi}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Kurs tugash sanasi:
                                <input
                                    type="date"
                                    name="kursTugashSanasi"
                                    value={formData.kursTugashSanasi}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Xona raqami:
                                <input
                                    type="text"
                                    name="xonaRaqami"
                                    value={formData.xonaRaqami}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Narxi:
                                <input
                                    type="text"
                                    name="narxi"
                                    value={formData.narxi}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Pul Oladigan Oyni Kiritish:
                                <input
                                    type="date"
                                    name="PulOladiganOyniKiritish"
                                    value={formData.PulOladiganOyniKiritish}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <button type="submit">Qo'shish</button>
                        </form>
                    </div>
                </div>
            )}
            <h2>Kurslar ro'yxati</h2>
            <table>
                <tr>
                    <th>Kurs nomi</th>
                    <th>Guruh nomi</th>
                    <th>Bolalar soni</th>
                    <th>O'qtuvchi</th>
                    <th>Boshlanish vaqti</th>
                    <th>Tugash vaqti</th>
                    <th>Kurs boshlanish sanasi</th>
                    <th>Kurs tugash sanasi</th>
                    <th>Xona raqami</th>
                    <th>Narxi</th>
                    <th>Pul Oladigan Oyni Kiritish</th>
                </tr>
                {data.map((course, index) => (
                    <tr key={index}>
                        <td>{course.kursNomi}</td>
                        <td>{course.guruhNomi}</td>
                        <td>{course.bolalarSoni}</td>
                        <td>{course.oqtuvchi}</td>
                        <td>{course.boshlanishVaqti}</td>
                        <td>{course.tugashVaqti}</td>
                        <td>{course.kursBoshlanishSanasi}</td>
                        <td>{course.kursTugashSanasi}</td>
                        <td>{course.xonaRaqami}</td>
                        <td>{course.narxi}</td>
                        <td>{course.PulOladiganOyniKiritish}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
