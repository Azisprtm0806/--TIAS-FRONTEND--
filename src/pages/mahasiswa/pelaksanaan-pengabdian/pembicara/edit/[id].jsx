import { Icon } from "@iconify-icon/react";
import Button from "../../../../../components/Button";
import Card from "../../../../../components/Card";
import Form from "../../../../../components/Form";
import Layout from "../../../../../components/Layout";
import PageHeader from "../../../../../components/PageHeader";
import useMenu from "../../../../../hooks/useMenu";
import useUser from "../../../../../hooks/useUser";
import UploadDokumen from "../../../../../modules/pelaksanaan-pengabdian/pembicara/upload-dokumen";
import { useRouter } from "next/router";
import useCRUD from "../../../../../hooks/useCRUD";
import { useEffect } from "react";
import date from "../../../../../utils/date";
import Accordion from "../../../../../components/Accordion";
import _ from "underscore";

export default function PembicaraEdit() {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });
  const { prefix, menu, setActive } = useMenu();

  const API_URL = `${process.env.API_ENDPOINT}/pengabdian/pembicara/detailPembicara`;

  const INITIAL_FORM = {
    pembicara_id: "",
    kategori_pembicara: "",
    judul_makalah: "",
    nama_pertemuan: "",
    penyelenggara: "",
    tingkat_pertemuan: "",
    tgl_pelaksanaan: "",
    bahasa: "",
    no_sk_penugasan: "",
    tgl_sk_penugasan: "",
    nama_dok: "",
    keterangan: "",
    tautan_dok: "",
    docs: [],
  };

  const { formdata, show, submitHandler } = useCRUD(API_URL, INITIAL_FORM, {
    rules: [
      { field: "kategori_pembicara", label: "Kategori Pembicara" },
      { field: "judul_makalah", label: "Judul Makalah" },
      { field: "nama_pertemuan", label: "Nama Pertemuan" },
      { field: "penyelenggara", label: "Penyelenggara" },
      { field: "tingkat_pertemuan", label: "Tingkat Pertemuan" },
      { field: "tgl_pelaksanaan", label: "Tanggal Pelaksanaan" },
      { field: "bahasa", label: "Bahasa" },
      { field: "no_sk_penugasan", label: "No. SK Penugasan" },
      { field: "tgl_sk_penugasan", label: "Tanggal SK Penugasan" },
      { field: "nama_dok", label: "Nama Dokumen" },
      { field: "keterangan", label: "Keterangan Dokumen" },
      { field: "tautan_dok", label: "Tautan Dokumen" },
    ],
    transformData: (data) => _.omit(data, ["docs"]),
    success: () => router.push(prefix + menu.url),
  });

  const { form, inputHandler } = formdata;

  const EDIT_URL = `${process.env.API_ENDPOINT}/pengabdian/pembicara/editPembicara`;
  const EDIT_OPTION = {
    url: `${EDIT_URL}/${form.pembicara_id}`,
    method: "PATCH",
  };

  useEffect(() => {
    if (router.isReady === false || !user) return;
    show(router.query.id, {
      transformData: (data) => ({
        ...data.dataPembicara[0],
        tgl_sk_penugasan: date.formatToInput(
          data.dataPembicara[0].tgl_sk_penugasan
        ),
        tgl_pelaksanaan: date.formatToInput(
          data.dataPembicara[0].tgl_pelaksanaan
        ),
        docs: data.dataDokumen,
      }),
    });
  }, [router, user]);

  const DELETE_FILE_URL = `${process.env.API_ENDPOINT}/pengabdian/pembicara/deleteDokumen`;

  const { destroy } = useCRUD(DELETE_FILE_URL);

  if ([user, menu].some((item) => item == null)) return <p>Loading...</p>;
  return (
    <Layout>
      <PageHeader
        title={`Edit ${menu.label}`}
        icon={menu.icon}
        handler={setActive}
      />
      <Form
        onSubmit={(event) => submitHandler(event, EDIT_OPTION)}
        type="formdata"
      >
        <Card className="mt-4">
          <Card.Header className="text-center">Pembicara</Card.Header>
          <Card.Body className="space-y-4">
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Kategori Pembicara <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Select
                className="flex-1"
                name="kategori_pembicara"
                onChange={inputHandler}
                value={form.kategori_pembicara}
                options={[
                  {
                    label: "Pembicara pada pertemuan ilmiah",
                    value: "Pembicara pada pertemuan ilmiah",
                  },
                  { label: "Pembicara kunci", value: "Pembicara kunci" },
                  {
                    label:
                      "Pembicara/narasumber pada pelatihan/penyuluhan/ceramah",
                    value:
                      "Pembicara/narasumber pada pelatihan/penyuluhan/ceramah",
                  },
                ]}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Judul Makalah <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="judul_makalah"
                onChange={inputHandler}
                value={form.judul_makalah}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Nama Pertemuan Ilmiah <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="nama_pertemuan"
                onChange={inputHandler}
                value={form.nama_pertemuan}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Tingkat Pertemuan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="tingkat_pertemuan"
                onChange={inputHandler}
                value={form.tingkat_pertemuan}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Penyelenggara <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="penyelenggara"
                onChange={inputHandler}
                value={form.penyelenggara}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Tanggal Pelaksanaan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="date"
                className="flex-1"
                name="tgl_pelaksanaan"
                onChange={inputHandler}
                value={form.tgl_pelaksanaan}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Bahasa <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="bahasa"
                onChange={inputHandler}
                value={form.bahasa}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                No SK Pengugasan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="no_sk_penugasan"
                onChange={inputHandler}
                value={form.no_sk_penugasan}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Tanggal Pengugasan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="date"
                className="flex-1"
                name="tgl_sk_penugasan"
                onChange={inputHandler}
                value={form.tgl_sk_penugasan}
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Dokumen <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <div className="flex-1 block">
                <UploadDokumen form={form} inputHandler={inputHandler} />
                {/* <div className="space-y-2 mt-2">
									{form.docs.map((doc, index) => (
										<Accordion key={`doc-${index}`} title={`Dokumen ${index + 1}`}>
											<Form.Group className="mb-4">
												<Form.Label>Nama Dokumen</Form.Label>
												<Form.Input type="text" className="flex-1" defaultValue={doc.nama_dok} disabled />
											</Form.Group>
											<Form.Group className="mb-4">
												<Form.Label>Keterangan</Form.Label>
												<Form.Input type="text" className="flex-1" defaultValue={doc.keterangan} disabled />
											</Form.Group>
											<Form.Group className="mb-4">
												<Form.Label>Tautan Dokumen</Form.Label>
												<Form.Input type="text" className="flex-1" defaultValue={doc.tautan_dok} disabled />
											</Form.Group>
											<Form.Group className="mb-4">
												<embed src={`${FILE_URL}/${doc.file}`} className="w-full h-[256px]" />
											</Form.Group>
										</Accordion>
									))}
								</div> */}
              </div>
            </Form.Group>
          </Card.Body>
        </Card>

        <table
          className="w-full border-collapse rounded-2xl overflow-hidden shadow table-auto mt-4"
          cellPadding={10}
        >
          <thead>
            <tr>
              <th
                colSpan={4}
                className="text-sm border-2 border-white bg-gray-50"
              >
                Dokumen
              </th>
            </tr>
            <tr>
              <th className="text-sm border-2 border-white bg-gray-200">
                Nama Dokumen
              </th>
              <th className="text-sm border-2 border-white bg-gray-200">
                Keteranagan
              </th>
              <th className="text-sm border-2 border-white bg-gray-200">
                Tautan Dokumen
              </th>

              <th className="text-sm border-2 border-white bg-gray-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {form.docs.map((doc, index) => (
              <tr key={`anggota-dosen-${index}`}>
                <td className="text-sm border-2 border-white bg-gray-50">
                  {doc.nama_dok}
                </td>
                <td className="text-sm border-2 border-white bg-gray-50">
                  {doc.keterangan}
                </td>
                <td className="text-sm border-2 border-white bg-gray-50">
                  {doc.tautan_dok}
                </td>
                <td className="text-sm border-2 border-white bg-gray-50">
                  <div className="flex items-stretch gap-1">
                    <Button.Icon
                      as="a"
                      href={`${prefix + menu.url}/pembicara/dokumenEdit/${
                        doc.dokumen_id
                      }`}
                      variant="secondary"
                      icon={<Icon icon="bx:edit" width={20} height={20} />}
                    />
                    <Button.Icon
                      type="button"
                      variant="danger"
                      icon={
                        <Icon
                          icon="solar:trash-bin-2-bold-duotone"
                          width={20}
                          height={20}
                          onClick={() =>
                            destroy(doc.dokumen_id).then(() =>
                              router.push(
                                `${prefix + menu.url}/pembicara/edit/${
                                  form.pembicara_id
                                }`
                              )
                            )
                          }
                        />
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 mt-4">
          <Button
            as="a"
            href={prefix + menu.url}
            variant="secondary"
            className="w-full h-12"
          >
            Batal
          </Button>
          <Button type="submit" variant="primary" className="w-full h-12">
            Konfirmasi
          </Button>
        </div>
      </Form>
    </Layout>
  );
}
