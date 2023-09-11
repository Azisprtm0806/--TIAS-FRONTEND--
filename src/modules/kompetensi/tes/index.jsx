import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import CertificateCard from "../../../components/CertificateCard";
import Pagination from "../../../components/Pagination";
import Filter from "./filter";
import Sort from "./sort";
import useDatatable from "../../../hooks/useDatatable";
import useCRUD from "../../../hooks/useCRUD";
import date from "../../../utils/date";

export default function TesModule({ baseURL }) {
	const DATA_URL = `${process.env.API_ENDPOINT}/kompetensi/getTes`;
	const DELETE_URL = `${process.env.API_ENDPOINT}/kompetensi/deleteTes`;

	const { data, loading, page, pageCount, filter, setPage, setFilter, canPrev, canNext, refresh, sortBy, getSortBy } =
		useDatatable(DATA_URL);
	const { destroy } = useCRUD(DELETE_URL);

	return (
		<>
			<div className="flex items-center justify-center gap-2 my-8">
				<Button
					as="a"
					href={`${baseURL}/tes/create`}
					variant="primary"
					icon={<Icon icon="ic:baseline-plus" width={20} height={20} />}
					pill
				>
					Tambah Sertifikat
				</Button>
				<Sort sortBy={sortBy} getSortBy={getSortBy} />
				<Filter filter={filter} handler={setFilter} />
			</div>
			<div className="grid grid-cols-3 gap-4">
				{loading && (
					<div className="col-span-3 py-2 bg-white shadow rounded-xl">
						<p className="text-center">Loading...</p>
					</div>
				)}
				{!loading && data && data.length < 1 && (
					<div className="col-span-3 py-2 bg-white shadow rounded-xl">
						<p className="text-center">Tidak ada data</p>
					</div>
				)}
				{!loading &&
					data &&
					data.map((row, index) => (
						<CertificateCard
							key={`row-${index}`}
							title={row.nama_tes}
							score={row.skor_tes}
							provider={row.penyelenggara}
							year={date.formatToID(new Date(row.tgl_tes), { year: "numeric" })}
							bgPattern={(index % 3) + 1}
							action={
								<div className="flex gap-2">
									<Button.Icon
										as="a"
										href={`${baseURL}/tes/edit/${row.tes_id}`}
										variant="secondary"
										icon={<Icon icon="bx:edit" width={20} height={20} />}
									/>
									<Button.Icon
										type="button"
										variant="danger"
										icon={<Icon icon="solar:trash-bin-2-bold-duotone" width={20} height={20} />}
										onClick={() => destroy(row.tes_id).then(() => refresh())}
									/>
								</div>
							}
							isVerified
						/>
					))}
			</div>
			<Pagination current={page} handler={setPage} max={pageCount} canPrev={canPrev()} canNext={canNext()} className="mt-8" />
		</>
	);
}
