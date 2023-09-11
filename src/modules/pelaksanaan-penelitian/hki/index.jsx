import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import Filter from "./filter";
import useDatatable from "../../../hooks/useDatatable";
import useCRUD from "../../../hooks/useCRUD";
import date from "../../../utils/date";
import SortIcon from "../../../components/SortIcon";
import CreateDokumen from "./create-dokumen";

export default function HKIModule({ baseURL }) {
	const DATA_URL = `${process.env.API_ENDPOINT}/penelitian/hki/getDataHki`;
	const DELETE_URL = `${process.env.API_ENDPOINT}/penelitian/hki/deleteHki`;

	const { data, loading, page, pageCount, filter, setPage, setFilter, canPrev, canNext, refresh, sortBy, getSortBy } =
		useDatatable(DATA_URL);
	const { destroy } = useCRUD(DELETE_URL);

	return (
		<>
			<div className="flex items-center justify-center gap-2 mb-8">
				<Button
					as="a"
					href={`${baseURL}/hki/create`}
					variant="primary"
					icon={<Icon icon="ic:baseline-plus" width={20} height={20} />}
					pill
				>
					Tambah HKI
				</Button>
				<Filter filter={filter} handler={setFilter} />
			</div>
			<table className="w-full border-collapse rounded-2xl overflow-hidden shadow table-auto" cellPadding={10}>
				<thead>
					<tr>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("hki_id")}>
								No
								<SortIcon sort={getSortBy("hki_id")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("judul_hki")}>
								Judul
								<SortIcon sort={getSortBy("judul_hki")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("jenis_hki")}>
								Jenis Publikasi
								<SortIcon sort={getSortBy("jenis_hki")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("tgl_terbit_hki")}>
								Tanggal Terbit
								<SortIcon sort={getSortBy("tgl_terbit_hki")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200"></th>
					</tr>
				</thead>
				<tbody>
					{loading && (
						<tr>
							<td colSpan="5" className="text-sm border-2 border-white bg-gray-50 text-center">
								Loading...
							</td>
						</tr>
					)}
					{!loading && data && data.length < 1 && (
						<tr>
							<td colSpan="5" className="text-sm border-2 border-white bg-gray-50 text-center">
								Tidak ada data
							</td>
						</tr>
					)}
					{!loading &&
						data &&
						data.map((row, index) => (
							<tr key={`row-${index}`}>
								<td className="text-sm border-2 border-white bg-gray-50">{index + 1}</td>
								<td className="text-sm border-2 border-white bg-gray-50 max-w-[8rem] truncate">{row.judul_hki}</td>
								<td className="text-sm border-2 border-white bg-gray-50">{row.jenis_hki}</td>
								<td className="text-sm border-2 border-white bg-gray-50">
									{date.formatToID(new Date(row.tgl_terbit_hki))}
								</td>
								<td className="text-sm border-2 border-white bg-gray-50">
									<div className="flex items-stretch gap-1">
										<CreateDokumen id={{ hki_id: row.hki_id }} />
										<Button.Icon
											as="a"
											href={`${baseURL}/hki/detail/${row.hki_id}`}
											variant="info"
											icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
										/>
										<Button.Icon
											as="a"
											href={`${baseURL}/hki/edit/${row.hki_id}`}
											variant="secondary"
											icon={<Icon icon="bx:edit" width={20} height={20} />}
										/>
										<Button.Icon
											variant="danger"
											icon={<Icon icon="solar:trash-bin-2-bold-duotone" width={20} height={20} />}
											onClick={() => destroy(row.hki_id).then(() => refresh())}
										/>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination current={page} handler={setPage} max={pageCount} canPrev={canPrev()} canNext={canNext()} className="mt-8" />
		</>
	);
}
