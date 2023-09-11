import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";
import useModal from "../../../hooks/useModal";

export default function Filter() {
	const { show, toggle } = useModal();

	return (
		<>
			<Button variant="primary" icon={<Icon icon="clarity:filter-line" width={20} height={20} />} onClick={toggle} pill>
				Filter
			</Button>
			<Modal title="Filter Berdasarkan" show={show} handler={toggle}>
				<Form className="grid grid-cols-2 gap-4">
					<Form.Group>
						<Form.Label>Mata Kuliah</Form.Label>
						<Form.Select
							className="flex-1"
							options={[
								{ label: "Akhlak", value: "Akhlak" },
								{ label: "Algoritma dan Pemrograman + Praktikum", value: "Algoritma dan Pemrograman + Praktikum" },
								{ label: "Aljabar Linear", value: "Aljabar Linear" },
								{ label: "Analisis Algoritma", value: "Analisis Algoritma" },
								{ label: "Arsitektur dan Organisasi Komputer", value: "Arsitektur dan Organisasi Komputer" },
								{ label: "Bahasa Indonesia", value: "Bahasa Indonesia" },
								{ label: "Bahasa Inggris + Praktikum", value: "Bahasa Inggris + Praktikum" },
								{ label: "Basis Data + Praktikum", value: "Basis Data + Praktikum" },
								{ label: "Fisika Dasar + Praktikum", value: "Fisika Dasar + Praktikum" },
								{ label: "ID (Islam Disiplin Ilmu)", value: "ID (Islam Disiplin Ilmu)" },
								{ label: "Inovasi Teknologi dan Kewirausahaan", value: "Inovasi Teknologi dan Kewirausahaan" },
								{ label: "Interaksi Manusia dan Komputer", value: "Interaksi Manusia dan Komputer" },
								{ label: "Internet of Things", value: "Internet of Things" },
								{ label: "Jaringan Komputer + Praktikum", value: "Jaringan Komputer + Praktikum" },
								{ label: "Kalkulus I", value: "Kalkulus I" },
								{ label: "Kalkulus II", value: "Kalkulus II" },
								{ label: "Kecerdasan Buatan", value: "Kecerdasan Buatan" },
								{ label: "Keamanan Informasi + Praktikum", value: "Keamanan Informasi + Praktikum" },
								{ label: "Komputer dan Masyarakat", value: "Komputer dan Masyarakat" },
								{ label: "Matematika Diskrit", value: "Matematika Diskrit" },
								{ label: "Metode Numerik + Praktikum", value: "Metode Numerik + Praktikum" },
								{
									label: "Pancasila dan Pendidikan Kewarganegaraan",
									value: "Pancasila dan Pendidikan Kewarganegaraan",
								},
								{ label: "Pemrograman Berorientasi Obyek + Prakt.", value: "Pemrograman Berorientasi Obyek + Prakt." },
								{ label: "Pengantar Teknologi Informasi", value: "Pengantar Teknologi Informasi" },
								{ label: "Pengolahan Paralel + Praktikum", value: "Pengolahan Paralel + Praktikum" },
								{
									label: "Perancangan dan Pemrograman Web + Prakt.",
									value: "Perancangan dan Pemrograman Web + Prakt.",
								},
								{ label: "Rekayasa Perangkat Lunak + Praktikum", value: "Rekayasa Perangkat Lunak + Praktikum" },
								{
									label: "Rekayasa Perangkat Lunak Lanjut + Praktikum",
									value: "Rekayasa Perangkat Lunak Lanjut + Praktikum",
								},
								{ label: "Sistem Informasi", value: "Sistem Informasi" },
								{ label: "Sistem Informasi Geografis + Praktikum", value: "Sistem Informasi Geografis + Praktikum" },
								{ label: "Sistem Operasi", value: "Sistem Operasi" },
								{ label: "Sistem Pakar", value: "Sistem Pakar" },
								{ label: "Statistika dan Probabilitas", value: "Statistika dan Probabilitas" },
								{ label: "Struktur Data", value: "Struktur Data" },
								{ label: "Syariah", value: "Syariah" },
								{ label: "Teori Bahasa dan Automata", value: "Teori Bahasa dan Automata" },
								{ label: "Verifikasi dan Validasi Perangkat Lunak", value: "Verifikasi dan Validasi Perangkat Lunak" },
							]}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Jenis Mata Kuliah</Form.Label>
						<Form.Select
							className="flex-1"
							options={[
								{ label: "Wajib", value: "Wajib" },
								{ label: "Peminatan", value: "Peminatan" },
							]}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Bidang Keilmuan</Form.Label>
						<Form.Input type="text" className="flex-1" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Kelas</Form.Label>
						<Form.Select
							className="flex-1"
							options={[
								{ label: "Reguler A", value: "Reguler A" },
								{ label: "Reguler B", value: "Reguler B" },
								{ label: "Reguler C", value: "Reguler C" },
								{ label: "Reguler D", value: "Reguler D" },
								{ label: "Reguler Karyawan", value: "Reguler Karyawan" },
							]}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Jumlah Mahasiswa</Form.Label>
						<Form.Input type="number" className="flex-1" />
					</Form.Group>
					<Form.Group>
						<Form.Label>SKS</Form.Label>
						<Form.Input type="number" className="flex-1" />
					</Form.Group>
					<Form.Group className="col-span-2 flex gap-2">
						<Button type="button" variant="secondary" onClick={toggle}>
							Batal
						</Button>
						<Button variant="primary" className="grow">
							Terapkan
						</Button>
					</Form.Group>
				</Form>
			</Modal>
		</>
	);
}
