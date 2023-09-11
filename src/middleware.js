import { NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";
import { sessionConfig } from "./config/session";

export const middleware = async (req) => {
	const response = NextResponse.next();
	const url = req.nextUrl;

	const session = await getIronSession(req, response, sessionConfig);

	// do anything with session here:
	const { user } = session;

	// like mutate user:
	// user.something = someOtherThing;
	// or:
	// session.user = { ...session.user, role_id: 2 };

	// uncomment next line to commit changes:
	// await session.save();
	// or maybe you want to destroy session:
	// await session.destroy();

	const universalRoute = ["/register"];
	const protectedRoute = ["/login", "/auth/verify"];
	if (user == null && universalRoute.includes(url.pathname)) return response;

	if (user == null && !protectedRoute.includes(url.pathname)) return NextResponse.redirect(new URL("/login", req.url));

	if (user?.role == "Dosen" && url.pathname.startsWith("/dosen") === false && !universalRoute.includes(url.pathname))
		return NextResponse.redirect(new URL("/dosen", req.url));
	if (user?.role == "Mahasiswa" && url.pathname.startsWith("/mahasiswa") === false && !universalRoute.includes(url.pathname))
		return NextResponse.redirect(new URL("/mahasiswa", req.url));

	return response;
};

export const config = {
	matcher: "/((?!api|static|favicon.ico|_next/static|img|icon).*)",
};
