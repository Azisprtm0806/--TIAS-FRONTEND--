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
					<Form.Group className="col-span-2">
						<Form.Label>Judul Pengujian</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Bidang Keilmuan</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Jenis Pengujian</Form.Label>
						<Form.Select
							options={[
								{ label: "Kerja Praktek/PKL", value: "Kerja Praktek/PKL" },
								{ label: "Tugas Akhir", value: "Tugas Akhir" },
							]}
						/>
					</Form.Group>
					<Form.Group className="col-span-2">
						<Form.Label>Program Studi</Form.Label>
						<Form.Select
							options={[
								{ label: "Teknik Informatika", value: "Teknik Informatika" },
								{ label: "Teknik Mesin", value: "Teknik Mesin" },
								{ label: "Teknik Elektro", value: "Teknik Elektro" },
								{ label: "Teknik Sipil", value: "Teknik Sipil" },
							]}
						/>
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
