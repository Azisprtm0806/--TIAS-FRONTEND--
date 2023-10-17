import { Icon } from "@iconify-icon/react";
import Button from "../../../../../components/Button";
import Card from "../../../../../components/Card";
import Form from "../../../../../components/Form";
import Layout from "../../../../../components/Layout";
import PageHeader from "../../../../../components/PageHeader";
import useMenu from "../../../../../hooks/useMenu";
import useUser from "../../../../../hooks/useUser";
import { useRouter } from "next/router";
import BackButton from "../../../../../components/BackButton";
import useCRUD from "../../../../../hooks/useCRUD";
import { useEffect } from "react";
import date from "../../../../../utils/date";

export default function AnggotaProfesiDetail() {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });
  const { prefix, menu, setActive } = useMenu();

  const API_URL = `${process.env.API_ENDPOINT}/penunjang/detailProfesi`;
  const FILE_URL = `${process.env.API_ENDPOINT}/file-profesi`;

  const INITIAL_FORM = {
    prof_id: "",
    nama_organisasi: "",
    peran: "",
    mulai_keanggotaan: "",
    selesai_keanggotaan: "",
    instansi_prof: "",
    file: "",
  };

  const { formdata, show } = useCRUD(API_URL, INITIAL_FORM, {
    rules: [
      { field: "nama_organisasi", label: "Nama Organisasi" },
      { field: "peran", label: "Peran" },
      { field: "mulai_keanggotaan", label: "Mulai Keanggotaan" },
      { field: "selesai_keanggotaan", label: "Selesai Keanggotaan" },
      { field: "instansi_prof", label: "Instansi Profesi" },
    ],
    success: () => router.push(prefix + menu.url),
  });

  const { form } = formdata;

  useEffect(() => {
    if (router.isReady === false || !user) return;
    show(router.query.id, {
      transformData: (data) => ({
        ...data,
        mulai_keanggotaan: date.formatToInput(data.mulai_keanggotaan),
        selesai_keanggotaan: date.formatToInput(data.selesai_keanggotaan),
      }),
    });
  }, [router, user]);

  if ([user, menu].some((item) => item == null)) return <p>Loading...</p>;
  return (
    <Layout>
      <PageHeader
        title={menu.label}
        icon={menu.icon}
        handler={setActive}
        leading={<BackButton />}
      />
      <div className="flex justify-center mt-4">
        <Button
          as="a"
          href={`${prefix + menu.url}/anggota-profesi/edit/${form.prof_id}`}
          variant="secondary"
          icon={<Icon icon="bx:edit" width={20} height={20} />}
          pill
        >
          Edit
        </Button>
      </div>
      <Form>
        <Card className="mt-4">
          <Card.Header className="text-center">Anggota Profesi</Card.Header>
          <Card.Body className="space-y-4">
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Nama Organisasi <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="nama_organisasi"
                value={form.nama_organisasi}
                disabled
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Peran <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="peran"
                onChange={inputHandler}
                value={form.peran}
                disabled
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Mulai Keanggotaan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="date"
                className="flex-1"
                name="mulai_keanggotaan"
                value={form.mulai_keanggotaan}
                disabled
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Selesai Keanggotaan <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="date"
                className="flex-1"
                name="selesai_keanggotaan"
                value={form.selesai_keanggotaan}
                disabled
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Instansi Profesi <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <Form.Input
                type="text"
                className="flex-1"
                name="instansi_prof"
                value={form.instansi_prof}
                disabled
              />
            </Form.Group>
            <Form.Group className="flex items-baseline gap-3">
              <Form.Label className="min-w-[18rem]">
                Dokumen <span className="text-danger-600">*</span>
              </Form.Label>
              <span>:</span>
              <div className="block flex-1 space-y-2">
                <embed
                  src={`${FILE_URL}/${form.file}`}
                  className="w-full h-[256px]"
                />
              </div>
            </Form.Group>
          </Card.Body>
        </Card>
        <div className="flex gap-4 mt-4">
          <Button
            as="a"
            href={prefix + menu.url}
            variant="secondary"
            className="w-full h-12"
          >
            Kembali
          </Button>
        </div>
      </Form>
    </Layout>
  );
}
