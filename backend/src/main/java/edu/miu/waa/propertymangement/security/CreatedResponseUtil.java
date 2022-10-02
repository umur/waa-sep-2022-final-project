package edu.miu.waa.propertymangement.security;

import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import java.net.URI;

@Slf4j
public class CreatedResponseUtil {
    public CreatedResponseUtil() {
    }

    public static String getCreatedId(Response response) throws WebApplicationException {
        URI location = response.getLocation();
        if (!response.getStatusInfo().equals(Response.Status.CREATED)) {
            Response.StatusType statusInfo = response.getStatusInfo();
            throw new WebApplicationException("Create method returned status " + statusInfo.getReasonPhrase() + " (Code: " + statusInfo.getStatusCode() + "); expected status: Created (201)", response);
        } else if (location == null) {
            return null;
        } else {
            String path = location.getPath();
            log.info(path);
            return path.substring(path.lastIndexOf(47) + 1);
        }
    }
}