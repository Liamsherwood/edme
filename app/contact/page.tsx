"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(()=>{
	    (async function () {
	        const cal = await getCalApi();
		    cal("ui", {"styles":{"branding":{"brandColor":"#171717"}},"hideEventTypeDetails":false,"layout":"month_view"});
	    })();
	}, [])
	return <Cal 
	    calLink="talktoedme/15min"
	    style={{width:"100%",height:"100%",overflow:"scroll"}}
	    config={{layout: 'month_view'}}  
	/>;
};