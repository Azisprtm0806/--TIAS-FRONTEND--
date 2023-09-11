import useMenu from "../../../hooks/useMenu";
import Layout from "../../../components/Layout";
import PageHeader from "../../../components/PageHeader";
import useUser from "../../../hooks/useUser";
import PengajaranModule from "../../../modules/pelaksanaan-pendidikan/pengajaran";
import BimbinganModule from "../../../modules/pelaksanaan-pendidikan/bimbingan";
import PengujianModule from "../../../modules/pelaksanaan-pendidikan/pengujian";
import BahanAjarModule from "../../../modules/pelaksanaan-pendidikan/bahan-ajar";
import TugasTambahanModule from "../../../modules/pelaksanaan-pendidikan/tugas-tambahan";

export default function PelaksanaanPendidikan() {
	const { user } = useUser({ redirectTo: "/login" });
	const { prefix, menu, active, setActive } = useMenu();

	if ([user, menu].some((item) => item == null)) return <p>Loading...</p>;
	return (
		<Layout>
			<PageHeader title={menu.label} icon={menu.icon} items={menu.submenus} active={active.url} handler={setActive} />
			<div className="my-8">
				{active.url === "#pengajaran" && <PengajaranModule baseURL={prefix + menu.url} />}
				{active.url === "#bimbingan" && <BimbinganModule baseURL={prefix + menu.url} />}
				{active.url === "#pengujian" && <PengujianModule baseURL={prefix + menu.url} />}
				{active.url === "#bahan-ajar" && <BahanAjarModule baseURL={prefix + menu.url} />}
				{active.url === "#tugas-tambahan" && <TugasTambahanModule baseURL={prefix + menu.url} />}
			</div>
		</Layout>
	);
}
