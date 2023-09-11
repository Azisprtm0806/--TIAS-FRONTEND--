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
						<Form.Label>Tugas Tambahan</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Unit Kerja</Form.Label>
						<Form.Select
							options={[
								{ label: "Teknik Informatika", value: "Teknik Informatika" },
								{ label: "Teknik Mesin", value: "Teknik Mesin" },
								{ label: "Teknik Elektro", value: "Teknik Elektro" },
								{ label: "Teknik Sipil", value: "Teknik Sipil" },
							]}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Istansi</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Tanggal Mulai</Form.Label>
						<Form.Input type="date" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Tanggal Berakhir</Form.Label>
						<Form.Input type="date" />
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
