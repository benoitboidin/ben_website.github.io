# Cantaloupe notes

> **Cantaloupe** is an open-source dynamic image server for the on-demand generation of derivatives of high-resolution source images, that work with the **IIIF Image API** (International Image Interoperability Framework).

## Use Cantaloupe API

See: https://iiif.io/api/image/3.0/#4-image-requests

```url
/cantaloupe/iiif/3/{identifier}/{region}/{size}/{rotation}/{quality}.{format}
```

### Parameters

| identifier      | region        | size     | rotation | quality   | format |
| --------------- | ------------- | -------- | -------- | --------- | ------ |
| image file path | `full`        | `max`    | `n`      | `color`   | `jpg`  |
|                 | `square`      | `^max`   | `!n`     | `gray`    | `tif`  |
|                 | `x,y,w,h`     | `w,`     |          | `bitonal` | `png`  |
|                 | `pct:x,y,w,h` | `^w,`    |          | `default` | `gif`  |
|                 |               | `,h`     |          |           | `jp2`  |
|                 |               | `^,h`    |          |           | `pdf`  |
|                 |               | `pct:n`  |          |           | `webp` |
|                 |               | `^pct:n` |          |           |        |
|                 |               | `w,h`    |          |           |        |
|                 |               | `^w,h`   |          |           |        |
|                 |               | `!w,h`   |          |           |        |
|                 |               | `^!w,h`  |          |           |        |

### Order of implementation:

`Region THEN Size THEN Rotation THEN Quality THEN Format`

## Tutorial
Requires [Java 11+](https://www.java.com/fr/download/manual.jsp)

1. download Cantaloupe: https://cantaloupe-project.github.io/
2. duplicate `cantaloupe.properties.sample`
3. rename the duplicated file `cantaloupe.properties`
4. in the mentioned file, change `FilesystemSource.BasicLookupStrategy.path_prefix` to the path of the image directory
5. start the server with `java -Dcantaloupe.config=/path/to/cantaloupe.properties -Xmx2g -jar cantaloupe-5.0.6.jar`

URLs to test the server: 
```text
http://localhost:8182/iiif/3/tux.png/info.json
http://localhost:8182/iiif/3/tux.png/0,0,800,800/max/0/default.jpg
```

## Containerize Cantaloupe server

### 1. Set up project

```text
cantaloupe-server/
|-cantaloupe-5.0.6/
|-images/
|-Dockerfile
```

Download `cantaloupe-5.0.6` from https://cantaloupe-project.github.io. 
Don't forget to customize the `cantaloupe.properties` file like this :

```properties
FilesystemSource.BasicLookupStrategy.path_prefix = images/
```

### 2. Write Dockerfile

```Dockerfile
# Use the official image as a parent image (Java 21)
FROM openjdk:21

# Set the working directory
WORKDIR /Users/benoitboidin/Desktop/s10_info/projet_fin_etudes/m2_pfe_webgpu/sandbox/cantaloupe_server/

# Copy the current directory contents into the container at /usr/src/cantaloupe
COPY . .

# Make port 8182 available to the world outside this container (localhost:8182)
EXPOSE 8182

# Run the application when the container launches
CMD ["java", "-Dcantaloupe.config=cantaloupe-5.0.6/cantaloupe.properties", "-Xmx2g", "-jar", "cantaloupe-5.0.6/cantaloupe-5.0.6.jar"]
```

### 2. Build image

Open terminal and go to the directory, then 

```shell
docker build -t cantaloupe .
```

### 3. Run container

Open terminal and go to the directory, then 

```shell
docker run -p 8182:8182 cantaloupe
```

Argument `-p 8182:8182` make the container available to host from port. 

