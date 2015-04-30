package com.nayak.launch;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainWallServlet extends HttpServlet {
	
	 protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException,IOException {
		 String msg =" {comments:[{name:'Azurite',comment: 'Some gems have hidden qualities beyond their luster, beyond theirshine... Azurite is one of those gems.'}, {   name: 'ABC',comment: 'ABC Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.'},{name: 'EFG',comment: 'EFG Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.'}]}";
	 
		 try (PrintWriter out = response.getWriter()) {
			 out.println(msg);
		 } 		

	 }
}	 
