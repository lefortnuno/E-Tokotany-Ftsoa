import getDataUtilisateur from "../../api/udata";

export default function ProfilSidebar() {
	const u_info = getDataUtilisateur();
	return (
		<>
			<div className="user">
				<div className="photo">
					<img
						src={process.env.PUBLIC_URL + `/picture/pdp/${u_info.u_photoPDP}`}
						alt="pdp"
					/>
				</div>
				<div className="info">
					<a
						className=""
						data-toggle="collapse"
						href="#collapseExample"
						aria-expanded="true"
					>
						<span>
							{u_info.u_identification}
							<span className="user-level">{u_info.u_attribut}</span>
							{/* <span className="caret"></span> */}
						</span>
					</a>
					<div className="clearfix"></div>
				</div>
			</div>
		</>
	);
}
