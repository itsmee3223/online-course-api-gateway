# Online Course - Api Gateway

## Api Gateway

<div style="text-align: center;">

![Architecture Microservices](https://res.cloudinary.com/dniq91ewn/image/upload/v1664261583/BWA%20Microservices/Group_10_oznnju.png)

</div>

Implement an API gateway that is the single entry point for all clients. The API gateway handles requests in one of two ways. Some requests are simply proxied/routed to the appropriate service. It handles other requests by fanning out to multiple services.

Rather than provide a one-size-fits-all style API, the API gateway can expose a different API for each client. For example, the Netflix API gateway runs client-specific adapter code that provides each client with an API that’s best suited to its requirements.

- The API gateway might also implement security, e.g. verify that the client is authorized to perform the request.
- This Api-Gateway is built using ExpressJS Framework.
- API Documentation: https://documenter.getpostman.com/view/18696549/2s83eysxPC#fd65f9c2-1fe7-4d48-bea5-40c79641ecb3

## Services

| User Service | Media Service | Course Service | Payment Service |
| --- | --- | --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255818/BWA%20Microservices/Asset_3_cn6ASO3xsi7_qqf4rz.webp)](https://github.com/itsmee3223/user-service-online-course) | [![Media Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255875/BWA%20Microservices/Asset_4_YykdDSbga_dq1klz.webp)](https://github.com/itsmee3223/media-service-online-course)| [![Course Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255894/BWA%20Microservices/Asset_2_7ZFU6kkrO_zyo2j4.webp)](https://github.com/itsmee3223/course-service-online-courese)| [![Payment Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664255912/BWA%20Microservices/Asset_1_M1tYLXCSBX_l44c4w.webp)](https://github.com/itsmee3223/payment-service-online-course)

## Frontend
| Frontpage | Memberpage |
| --- | --- |
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664283770/BWA%20Microservices/Rlogical-Blog-Images-thumbnail_dxonbd_1_yok05a.png)](https://microservices-bwa-frontend.vercel.app/) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284639/BWA%20Microservices/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027_1_s4jcmv.png)](https://micro-react-memberpage.vercel.app/login) | 
| [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/frontend-online-course) | [![User Service](https://res.cloudinary.com/dniq91ewn/image/upload/v1664284408/BWA%20Microservices/GitHub-Mark-modified_1_fn5dks.png)](https://github.com/itsmee3223/memberpage-online-course) |
