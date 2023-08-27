import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export function middleware(request: NextRequest) {
  // const allCookies = request.cookies.get("username")

  // console.log(allCookies,"username");
  

}

export const config = {
  matcher: ["/"],
}