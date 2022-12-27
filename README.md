<h1 align='center'>
Web Development Microservice </br>
Website Kelas Online
</h1>
<p align='center'>
I bought a course from BWA and learn how to build microservice web.
</p>
<p align='center'>
This is the API gateway, build with ExpressJS, and deployed with <a href='https://vercel.com/ target='_blank'>Railway</a>
</p>

---

## 🏫 Link to [Course](https://buildwithangga.com/kelas/web-development-microservice-website-kelas-online?main_leads=searchsuggestion)


## 🧾 Description
<p align='justify'>
Microservice is one of the architectures on Website Development that is used by many Developers and IT companies in developing a Website. The goal is for the Website to be more stable and easy to fix in each of its services if there is a bug in the service. The project built is a website for online learning (digital class) for anyone who wants to upgrade skills in the world of IT or also self-improvement. Starting from slicing the website design from Figma using the React JavaScript Framework and also assisted with Tailwind CSS. After that we will try using the API (per service) that we have created using Laravel and Express JS.
</p>


## 🔑 Keypoints
- Implementing Microservices Architecture in Applications
- Learn to Build APIs with Nodejs & Laravel
- Learn to Deploy Applications
- Learn to Use JSON WEB TOKEN
- Learn to Use Nextjs for Server Side Rendering (SSR)
- Learn to Use TailwindCss
- Learn to Use Reactjs Libraries
- Learn to make reusable component react from scratch


## 👷 Architecture
![Architecture Microservices](https://res.cloudinary.com/dniq91ewn/image/upload/v1664261583/BWA%20Microservices/Group_10_oznnju.png)

## 🌍 APIs
Rather than provide a one-size-fits-all style API, the API gateway can expose a different API for each client. For example, the Netflix API gateway runs client-specific adapter code that provides each client with an API that’s best suited to its requirements.

The API gateway might also implement security, e.g. verify that the client is authorized to perform the request.
This Api-Gateway is built using ExpressJS Framework.

API Documentation: https://documenter.getpostman.com/view/18696549/2s83eysxPC

#### User Gateway

| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |   --------------------------------------------------------------------- |
| POST        | /users/register             | -              | {</br> name: String, </br>email: String, </br> password: String </br>} |User register                                    |
| POST       | /users/login             | -             | { </br>email: String, </br> password: String </br>}     | User login                                       |
| PUT       | /users     | -              | {</br> name: String, </br>email: String, </br> password: String </br> avatar: String </br>} | Update existing user                                                 |
| GET        | /users        | -             | - | Get all users                                       |
| POST     | /users/logout        | -             | -   | Logout user                                           |
| POST       | /refresh-tokens     | -              | {<br>refresh_token: String <br> } | Get refresh token                                                 |

#### Media   Gateway

| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |   --------------------------------------------------------------------- |
| POST        | /media             | -              | {</br> image: base64</br>} |Create image media                                    |
| GET       | /media             | -             | -     | Get all media                       |
| DELETE       | /media/:id     | id              | - | Delete media by id                                                 |

#### Course Gateway

| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |   --------------------------------------------------------------------- |
| POST        | /mentors             | -              | {</br> name: String,</br>profile: String,</br>profession: String,</br>email: String</br>} | Create mentor                                    |
| GET       | /mentors/:id             | id             | -     | Get mentor by id                       |
| GET       | /mentors/             | -             | -     | Get all mentor                       |
| DELETE       | /mentors/:id     | id              | - | Delete mentor by id                                                 |
| PUT       | /mentors/:id     | id              | {</br> name: String,</br>profile: String,</br>profession: String,</br>email: String</br>} | Update mentor by id                                                 |
| POST        | /courses             | -              | {</br> name: String,</br>certificate: Boolean,</br>thumbnail: String,</br>type: String,</br>status: String,</br>level: String,</br>price: Number,</br>images: String</br>mentor_id: Number</br>} | Create course                                    |
| GET       | /courses             | -             | -     | Get all course                       |
| GET       | /courses/             | q,status             | -     | Get all course by name, status                       |
| DELETE       | /courses/:id     | id              | - | Delete course by id                                                 |
| PUT       | /courses/:id     | id              | {</br> name: String,</br>certificate: Boolean,</br>thumbnail: String,</br>type: String,</br>status: String,</br>level: String,</br>price: Number,</br>images: String</br>mentor_id: Number</br>}  | Update course by id                                                 |
| POST        | /chapters             | -              | {</br> name: String,</br>course_id: Number</br>} | Create chapter                                    |
| GET       | /chapters?course_id=             | course_id             | -     | Get all chapters by course id                       |
| GET       | /chapters/:id             | id             | -     | Get chapter by id                       |
| DELETE       | /chapters/:id     | id              | - | Delete chapter by id                                                 |
| PUT       | /chapters/:id     | id              | {</br> name: String,</br>course_id: Number</br>}  | Update course by id                                                 |
| POST        | /lessons             | -              | {</br> name: String,</br> video: String,</br>chapter_id: Number</br>} | Create lesson                                    |
| GET       | /lessons?chapter_id=             | chapter_id             | -     | Get all lessons by chapter id                       |
| GET       | /lessons/:id             | id             | -     | Get lesson by id                       |
| DELETE       | /lessons/:id     | id              | - | Delete lesson by id                                                 |
| PUT       | /lessons/:id     | id              | {</br> name: String,</br> video: String,</br>chapter_id: Number</br>}  | Update course by id                                                 |
| POST        | /image-courses             | -              | {</br> image: String,</br>course_id: Number</br>} | Create image course                                    |
| DELETE       | /image-courses/:id     | id              | - | Delete image course by id                                                 |
| POST        | /my-courses             | -              | {</br> user_id: Number,</br>course_id: Number</br>} | Create coursse for current user login                                    |
| GET       | /my-courses             |       -       | -     | Get all my courses(current user login)                       |
| POST        | /reviews             | -              | {</br> user_id: Number,</br>course_id: Number,</br>rating: Number,</br>note: String</br>} | Create review course                                    |
| DELETE       | /reviews/:id     | id              | - | Delete review course by id                                                 |
| PUT       | /reviews/:id             |  {</br>rating: Number,</br>note: String</br>}            | -     | Update review course by id                       |

#### Orders & Payments Gateway
| **Method** | **Route**                  | **Parameters** | **Body**                                                                                                                                                                                                   | **Description**                                                       |
| ---------- | -------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |   --------------------------------------------------------------------- |
| GET       | /orders?user_id=             |       user_id       | -     | Get all user order by user id                       |
| POST       | /webhook             |       -       | -     | midtrans webhook for transaction status                       |

## ⚙ Tools and Technologies used
1. Visual Studio Code
2. Laravel
3. React JS
4. Node JS
5. Postman API
6. GitHub
7. Figma
8. Express JS
9. Tailwind CSS

## 🛠 Installation and setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

    ```javascript
    npm install
    ```

3. Create a .env file inside the root folder and provide the following environment variables or you can look in the .env.example file:

    ```
    PORT = <server port>

    TIMEOUT = <timeour respon>

    HOSTNAME = <this url>

    URL_SERVICE_MEDIA = <media api url>
    URL_SERVICE_USER = <user api url>
    URL_SERVICE_COURSE = <course api url>
    URL_SERVICE_ORDER_PAYMENT = <order payment url>

    JWT_SECRET = <random jwt secret string>
    JWT_SECRET_REFRESH_TOKEN = <random jwt secret refresh token string>
    JWT_ACCESS_TOKEN_EXPIRED = <jwt expired>
    JWT_REFRESH_TOKEN_EXPIRED = <refresh token expired></refresh>
    ```

4. Start the server using :

   ```javascript
   npm start
   ```

## 🚀 Services

 | User Service | Media Service | Course Service | Payment Service | Api Gateway |
| ---| --- | --- | --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255818/BWA%20Microservices/Asset_3_cn6ASO3xsi7_qqf4rz.webp)](https://github.com/itsmee3223/user-service-online-course) | [![Media Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255875/BWA%20Microservices/Asset_4_YykdDSbga_dq1klz.webp)](https://github.com/itsmee3223/media-service-online-course)| [![Course Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255894/BWA%20Microservices/Asset_2_7ZFU6kkrO_zyo2j4.webp)](https://github.com/itsmee3223/course-service-online-courese)| [![Payment Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255912/BWA%20Microservices/Asset_1_M1tYLXCSBX_l44c4w.webp)](https://github.com/itsmee3223/payment-service-online-course) | [![Api Gateway](https://res.cloudinary.com/dniq91ewn/image/upload/v1664273697/BWA%20Microservices/68747470733a2f2f696b2e696d6167656b69742e696f2f746174616e676465762f6f6e6c696e652d636f757273652f41737365745f385f62743434435147485f7a2e706e67_hasy54.webp)](https://github.com/itsmee3223/online-course-api-gateway)|

## 👨‍💻 Frontend
| Frontpage | Memberpage |
| --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664283770/BWA%20Microservices/Rlogical-Blog-Images-thumbnail_dxonbd_1_yok05a.png)](https://micro-bwa-frontend.vercel.app/) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284639/BWA%20Microservices/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027_1_s4jcmv.png)](https://micro-react-memberpage.vercel.app/) | 
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/frontend-online-course) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/memberpage-online-course) |
