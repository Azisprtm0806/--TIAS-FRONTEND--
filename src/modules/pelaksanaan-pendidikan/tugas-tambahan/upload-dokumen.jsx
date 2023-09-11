import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Form from "../../../components/Form";
import useModal from "../../../hooks/useModal";
import { Icon } from "@iconify-icon/react";

export default function UploadDokumen() {
	const { show, toggle } = useModal();

	return (
		<>
			<Button type="button" variant="primary" icon={<Icon icon="material-symbols:upload" width={20} height={20} />} onClick={toggle}>
				Unggah Dokumen
			</Button>
			<Modal title="Unggah Dokumen" show={show} handler={toggle}>
				<p className="text-center text-sm mb-8">
					(Maksimal total ukuran file dalam sekali proses upload : 5 MB) Dokumen yang dilampirkan adalah dokumen wajib dan dokumen
					yang sesuai dengan data yang diusulkan.Dokumen Wajib :- Ijazah- SK Penyetaraan Ijasah (PT luar negeri)- Transkrip Nilai
				</p>
				<Form className="space-y-4">
					<Form.Group>
						<Form.Label>
							File <span className="text-danger-600">*</span>
						</Form.Label>
						<small>( Jenis file yang diijinkan : pdf, jpg, jpeg, png, doc, docx, xls, xlsx, txt )</small>
						<Form.Input type="file" />
					</Form.Group>
					<Form.Group>
						<Form.Label>
							Nama Dokumen <span className="text-danger-600">*</span>
						</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>
							Keterangan <span className="text-danger-600">*</span>
						</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<Form.Group>
						<Form.Label>
							Jenis Dokumen <span className="text-danger-600">*</span>
						</Form.Label>
						<Form.Select
							options={[
								{ label: "PDF", value: "PDF" },
								{ label: "JPG", value: "JPG" },
								{ label: "PPT", value: "PPT" },
							]}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>
							Tautan Dokumen <span className="text-danger-600">*</span>
						</Form.Label>
						<Form.Input type="text" />
					</Form.Group>
					<div className="flex gap-4 mt-4">
						<Button onClick={toggle} variant="secondary" className="w-full h-12">
							Batal
						</Button>
						<Button type="submit" variant="primary" className="w-full h-12">
							Konfirmasi
						</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
}
