# Sosyal Medya ve Link Yönetim Uygulaması

## Proje Tanımı ve Amacı

Bu proje, kullanıcıların sosyal medya linklerini ve bu linklere ait bilgileri yönetebilecekleri bir projedir. Uygulama, atomic design prensiplerine uygun olarak geliştirilmiş ve directive, pipe, guard, resolver vb kullanımlarını içermektedir. Bu proje ile sosyal medya linkerli üzerinde CRUD işlemlerinin yapılması hedeflenmiştir. Backend de nodejs ile login ve CRUD işlemleri için API'ler oluşturulmuştur. Bonus olarak linklerin listelediği tabloda linkin olduğu satıra tıklayınca
ilgili urlin olduğu siteye yönlendirilip ziyaret edilebilmektedir. Ziyaret edilen linklerin bilgisi localde saklanıp anasayfanın sağında
son ziyaret edilenler başlığı altında listelenmektedir.

## Teknolojiler ve Araçlar

Frontend kısmında Angular, Bootstrap, PrimeNG, RxJS, TypeScript, HTML ve SCSS kullanılmıştır. Backend kısmında ise Node.js, Express ve MySQL kullanılmıştır.

## Kurulum Talimatları

### Backend Kurulumu

1. Proje dizinine gidin:
   cd backend

2. Gerekli paketleri yükleyin:
   npm install

3. MySQL veritabanını oluşturun ve yapılandırın:

   Proje içerisine Backup'ını eklediğim veri tabanımı MySql'inize import edebilirisiniz ya da aşağıdaki gibi
   veritabanınızı ekleyebilirsiniz.MySql dosyasını kendi veritabanınıza import etmek için;

   - backend / database içindeki sql dosyasını bilgisayarınza indiriniz.
   - Üst menüden servera tıklayınız.
   - Data import seçeneğini seçiniz.
   - import seçeneklerninden 2.sine tıklayınız ve indiridiğiniz dosya yolu giriniz.
   - new schema oluştuurnuz ve ardından 'Start İmport' butonuna tıklayınız.
   - Schemas kısmında refresh all yapınız.Oluşturduğunuz schema içinde indiridğiniz tablolar eklenmiş olacak.
   - use (verdiğiniz db ismi) çalıştırınız.
   - SELECT \* FROM links; linkler tablosuna ulaşabilirsiniz.
   - SELECT \* FROM users; kullanıcılar tablosuna ulaşabilirsiniz.

   ```sql " social_media_links veritabını oluşturunuz;"
   CREATE DATABASE social_media_links
   ```

   ```sql " links tablosunu oluşturunuz;"
   CREATE TABLE links (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   url VARCHAR(255) NOT NULL,
   description TEXT);
   ```

   ```sql " links tablosunu oluşturunuz;"
   CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL)
   ```

   ```sql
   INSERT INTO users (username, password) VALUES ('aylin', '123')
   ```

4. Backend sunucusunu başlatın:

   ```sh
   node server.js
   ```

5. API'yi `http://localhost:5000/api/links` adresinde çalışır durumda bulun.

### Frontend Kurulumu

1. Proje dizinine gidin:
   cd frontend
2. Gerekli paketleri yükleyin:
   npm install

3. Angular uygulamasını başlatın:
   npm start / ng serve

4. Tarayıcınızda `http://localhost:4200` adresine gidin.

## Proje Mimarisi

Proje, frontend ve backend olarak iki ana bileşenden oluşmaktadır. Frontend kısmı, kullanıcı arayüzünü ve kullanıcı etkileşimlerini yönetirken, backend kısmı veri yönetimini ve API işlemlerini gerçekleştirmektedir.

## Frontend

### Atomic Design Yapısı

Frontend, Atomic Design prensiplerine uygun olarak atom, molekül, organizma, şablon ve sayfa component'leri içerir:

- **Atom Component'ler:** Button, Input, FilterButton
- **Molekül Component'ler:** SearchBar, SocialButton, LoginAnimation, VisitedLink
- **Organizma Component'ler:** LoginForm, Navbar, Table
- **Şablon Component'ler:** MainTemplate
- **Sayfa Component'ler:** HomePage, LoginPage

### Directive ve Pipe Kullanımı

Custom directive ve pipe'lar kullanılarak dinamik ve yeniden kullanılabilir kod yapıları oluşturulmuştur.
Linklerin doğruluğunu kontrol eden bir directive http:// veya https:// ile başlamasını sağlamak için kurgulanmıştır.
Sosyal medya adlarını büyük harflerle gösteren bir pipe bulunmaktadır.
Table da arama yapabilmek için Search pipeı kurgulanmış ve kullanılmıştır.

## Backend

### API Endpoint'leri

Backend API aşağıdaki endpoint'lere sahiptir:

- **POST /api/login:** Ana sayfaya geçebilmek için giriş bilgilerinin doğruluğu için.
- **GET /api/links:** Tüm sosyal medya linklerini getirir.
- **POST /api/links:** Yeni bir sosyal medya linki ekler.
- **PUT /api/links/:id:** Belirtilen ID'ye sahip sosyal medya linkini günceller.
- **DELETE /api/links/:id:** Belirtilen ID'ye sahip sosyal medya linkini siler.

### Veritabanı Tasarımı

Veritabanı tasarımı, sosyal medya linklerini saklamak üzere `links` tablosunu içerir ve bu tablo aşağıdaki alanları içerir:

- **id:** Otomatik artan birincil anahtar.
- **name:** Sosyal medya adı.
- **url:** Link URL'si.
- **description:** Link açıklaması.
  Veritabanı tasarımı, sosyal medya girişi için `users` tablosunu içerir ve bu tablo aşağıdaki alanları içerir:
- **id:** Otomatik artan birincil anahtar.
- **username:** Kullanıcı adı.
- **password:** kullanıcı şifresi.

## Postman Koleksiyonu

API isteklerini test etmek için projede bir Postman koleksiyonu bulunmaktadır. Bu koleksiyonu Postman'e eklemek için aşağıdaki adımları izleyin:

1. Postman'i açın.
2. Sol üstteki "Import" butonuna tıklayın.
3. "Upload Files" seçeneğini seçin.
4. `src/assets/postman-collections/link-management.postman_collection.json` dosyasını seçin ve yükleyin.

Bu adımları takip ederek, API isteklerini Postman üzerinde kolayca test edebilirsiniz.

## Sonuç

Bu doküman, Sosyal Medya ve Link Yönetim Uygulaması'nın genel hatlarını ve kurulum talimatlarını içermektedir. Projenin daha detaylı incelemesi ve geliştirilmesi için kaynak kodları ve ilgili dökümantasyonları inceleyebilirsiniz. Proje, kullanıcıların sosyal medya linklerini yönetmelerine olanak tanıyan kullanıcı dostu ve dinamik bir platform sunmaktadır.


![image](https://github.com/user-attachments/assets/b6bb98c9-5e5b-447a-96f5-3f7ac4313190)
![image](https://github.com/user-attachments/assets/fe0a278c-7a07-45f0-b5f5-c92f4ba6eb45)
![image](https://github.com/user-attachments/assets/c8b75fbf-d089-4cf6-a9c0-058028db3b5c)
![image](https://github.com/user-attachments/assets/067e71cf-3bf1-458b-9ff8-d0b5a8ec09a3)
![image](https://github.com/user-attachments/assets/9bd7f54c-d567-46d7-8596-55a059288b66)
![image](https://github.com/user-attachments/assets/2ce36e8b-a308-49be-be27-c874d5460835)
![image](https://github.com/user-attachments/assets/4d41e106-283c-466e-b140-a4de069f1294)
![image](https://github.com/user-attachments/assets/26c2b47b-325d-4da4-b8f8-4de28e5c6b90)
![image](https://github.com/user-attachments/assets/a2a0cea4-9e2a-4748-84e4-29b1df1cbe26)

