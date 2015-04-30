package com.social.network.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("/login")
public class LoginService {
	
	@GET
	@Produces("text/json")
	public String validate() {
 		return "{error:this is coming from rest}";
	}

}
