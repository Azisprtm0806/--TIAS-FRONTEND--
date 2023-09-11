import Head from "next/head";
import dynamic from "next/dynamic";
import { Icon } from "@iconify-icon/react";
import useMenu from "../../hooks/useMenu";
import useUser from "../../hooks/useUser";
import Layout from "../../components/Layout";
import classNames from "classnames";
import Button from "../../components/Button";
import Card from "../../components/Card";

const AreaChart = dynamic(() => import("../../components/Chart/area"), { ssr: false });

export default function Home() {
	const { user, profile } = useUser({ redirectTo: "/login" });
	const { menu } = useMenu();

	if ([user, profile, menu].some((item) => item == null)) return <p>Loading...</p>;
	return (
		<Layout>
			<Head>
				<title>
					{menu.label} - {process.env.APP_NAME}
				</title>
			</Head>
			<div className="flex gap-4 p-4 bg-gray-200 mb-4 rounded-2xl">
				<div className="w-28 h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-white">
					<img
						src={process.env.API_ENDPOINT + "/foto-profile/" + profile?.image}
						alt="Profile"
						className="object-cover object-top h-full w-full"
					/>
				</div>
				<div className="block">
					<h1 className="flex items-center text-2xl font-semibold text-primary-600 uppercase mb-4">
						{profile?.nama_lengkap || ""}
						<Icon icon="material-symbols:verified" width={36} height={36} className="ml-1 text-info-600" />
					</h1>
					<span className="block text-base text-gray-500 font-normal">
						<Icon icon="ph:map-pin-fill" width={16} height={16} className="mr-1" />
						{profile?.educations?.at(0) != null ? profile?.educations.at(0).asal : "-"}
					</span>
					<span className="block text-base text-gray-500 font-normal">
						<Icon icon="ri:briefcase-fill" width={16} height={16} className="mr-1" />
						{profile?.educations?.at(0) != null ? profile?.educations.at(0).jenjang_studi : ""}{" "}
						{profile?.educations?.at(0) != null ? profile?.educations.at(0).program_studi : ""}
					</span>
					<span className="block text-base text-gray-500 font-normal">
						<Icon icon="el:user" width={16} height={16} className="mr-1" />
						NIDN : {profile?.nik}
					</span>
				</div>
			</div>
			<Card className="mb-4">
				<Card.Header className="bg-primary-600 text-white text-center text-sm">Summary</Card.Header>
				<Card.Body className="mx-6">
					<div className="grid grid-cols-4 gap-4">
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="icon-park-outline:certificate" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">9</p>
								<p className="block text-sm">Total Tes</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="icon-park-outline:certificate" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">2</p>
								<p className="block text-sm">Total Sertifikat</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="fa6-solid:hand-holding-hand" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">3</p>
								<p className="block text-sm">Total Pembicara</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="fa6-solid:hand-holding-hand" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">3</p>
								<p className="block text-sm">Total Pengabdian</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="solar:users-group-two-rounded-bold-duotone" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">1</p>
								<p className="block text-sm">Total Penghargaan</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="fa:flask" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">6</p>
								<p className="block text-sm">Total Penelitian</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="fa:flask" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">54</p>
								<p className="block text-sm">Total Publikasi Karya</p>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="inline-flex p-2 rounded-full bg-primary-600 mb-2">
									<Icon icon="fa:flask" width={24} height={24} className="text-white" />
								</div>
								<p className="block text-2xl font-bold leading-relaxed">2</p>
								<p className="block text-sm">Total HKI</p>
							</Card.Body>
						</Card>
					</div>
				</Card.Body>
			</Card>
			<div className="flex gap-4 mb-4">
				<Card className="grow">
					<Card.Header className="bg-primary-600 text-white text-center text-sm">Detail Publikasi per Tahun</Card.Header>
					<Card.Body className="-mx-4">
						<AreaChart />
					</Card.Body>
				</Card>
				<Card className="shrink">
					<Card.Header className="bg-primary-600 text-white text-center text-sm">Cetak Dokumen Riwayat Hidup</Card.Header>
					<Card.Body>
						<div className="flex items-center gap-2">
							<div className="grow space-y-2">
								<Button className="w-full" icon={<Icon icon="ant-design:setting-filled" width={24} height={24} />} pill>
									Atur Format CV
								</Button>
								<Button variant="primary" className="w-full" icon={<Icon icon="bxs:file" width={24} height={24} />} pill>
									Print CV
								</Button>
							</div>
							<div className="shrink-0">
								<img src="/icon/print_cv.png" alt="Print Illustration" className="w-full h-auto" />
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Layout>
	);
}
