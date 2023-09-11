import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import Filter from "./filter";
import useDatatable from "../../../hooks/useDatatable";
import useCRUD from "../../../hooks/useCRUD";
import date from "../../../utils/date";
import SortIcon from "../../../components/SortIcon";

export default function KepangkatanModule({ baseURL }) {
	const DATA_URL = `${process.env.API_ENDPOINT}/profile/getDataKepangkatan`;
	const DELETE_URL = `${process.env.API_ENDPOINT}/profile/deletePangkat`;

	const { data, loading, page, pageCount, filter, setPage, setFilter, canPrev, canNext, refresh, sortBy, getSortBy } =
		useDatatable(DATA_URL);
	const { destroy } = useCRUD(DELETE_URL);

	return (
		<>
			<div className="flex items-center justify-center gap-2 my-8">
				<Button
					as="a"
					href={`${baseURL}/kepangkatan/create`}
					variant="primary"
					icon={<Icon icon="ic:baseline-plus" width={20} height={20} />}
					pill
				>
					Tambah Kepangkatan
				</Button>
				<Filter />
			</div>
			<table className="w-full border-collapse rounded-2xl overflow-hidden shadow table-auto" cellPadding={10}>
				<thead>
					<tr>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("pangkat_id")}>
								No
								<SortIcon sort={getSortBy("pangkat_id")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("gol_pangkat")}>
								Golongan/Pangkat
								<SortIcon sort={getSortBy("gol_pangkat")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("nomor_sk")}>
								No. SK
								<SortIcon sort={getSortBy("nomor_sk")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("tgl_mulai")}>
								Terhitung Mulai Tanggal
								<SortIcon sort={getSortBy("tgl_mulai")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2 cursor-pointer" onClick={() => sortBy("tgl_sk")}>
								Tanggal SK
								<SortIcon sort={getSortBy("tgl_sk")} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200"></th>
					</tr>
				</thead>
				<tbody>
					{loading && (
						<tr>
							<td colSpan="6" className="text-sm border-2 border-white bg-gray-50 text-center">
								Loading...
							</td>
						</tr>
					)}
					{!loading && data && data.length < 1 && (
						<tr>
							<td colSpan="6" className="text-sm border-2 border-white bg-gray-50 text-center">
								Tidak ada data
							</td>
						</tr>
					)}
					{!loading &&
						data &&
						data.map((row, index) => (
							<tr key={`row-${index}`}>
								<td className="text-sm border-2 border-white bg-gray-50">{index + 1}</td>
								<td className="text-sm border-2 border-white bg-gray-50">{row.gol_pangkat}</td>
								<td className="text-sm border-2 border-white bg-gray-50">{row.nomor_sk}</td>
								<td className="text-sm border-2 border-white bg-gray-50">{date.formatToID(new Date(row.tgl_mulai))}</td>
								<td className="text-sm border-2 border-white bg-gray-50">{date.formatToID(new Date(row.tgl_sk))}</td>
								<td className="text-sm border-2 border-white bg-gray-50">
									<div className="flex items-stretch gap-1">
										<Button.Icon
											as="a"
											href={`${baseURL}/kepangkatan/detail/${row.pangkat_id}`}
											variant="info"
											icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
										/>
										<Button.Icon
											as="a"
											href={`${baseURL}/kepangkatan/edit/${row.pangkat_id}`}
											variant="secondary"
											icon={<Icon icon="bx:edit" width={20} height={20} />}
										/>
										<Button.Icon
											variant="danger"
											icon={<Icon icon="solar:trash-bin-2-bold-duotone" width={20} height={20} />}
											onClick={() => destroy(row.pangkat_id).then(() => refresh())}
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
