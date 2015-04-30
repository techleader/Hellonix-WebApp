package com.social.network.servlet;


import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ImageServlet extends HttpServlet {

	 public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		 System.out.println("Do request is called for imageservlet");
	      ServletContext cntx = req.getServletContext();
	      String imagename = req.getParameter("name");
	      // Get the absolute path of the image
	      String filename = cntx.getRealPath("images/"+imagename);
	      String mimeType = cntx.getMimeType(filename);
	      // retrieve mimeType dynamically
/*	      String mime = cntx.getMimeType(filename);
	      if (mime == null) {
	        resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	        return;
	      }*/
	      resp.setContentType(mimeType);
	      File file = new File("E:\\Jls\\Workspace\\SocailNetwork-Images/" +imagename);
	      resp.setContentLength((int)file.length());

	      FileInputStream in = new FileInputStream(file);
	      OutputStream out = resp.getOutputStream();

	      // Copy the contents of the file to the output stream
	       byte[] buf = new byte[1024];
	       int count = 0;
	       while ((count = in.read(buf)) >= 0) {
	         out.write(buf, 0, count);
	       }
	    out.close();
	    in.close();
	}
}

