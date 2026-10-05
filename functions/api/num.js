export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const num = url.searchParams.get("num") || "9889662072";
  const key = url.searchParams.get("key");
  if (key !== "jitendar") {
    return new Response(JSON.stringify({error:"key=jitendar use karo"}), {headers: {"Content-Type":"application/json"}});
  }
  return new Response(JSON.stringify({api:"JitendarAPI", number:num, company:"Jio/Airtel", circle:"MP", owner:"Jitendar", status:"Always ON"}), {headers: {"Content-Type":"application/json"}});
}
