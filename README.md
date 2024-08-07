# Sosyal Medya ve Link Yönetim Uygulaması

## Proje Tanımı ve Amacı

Bu proje, kullanıcıların sosyal medya linklerini ve bu linklere ait bilgileri yönetebilecekleri bir projedir. Uygulama, atomic design prensiplerine uygun olarak geliştirilmiş ve directive, pipe, guard, resolver vb kullanımlarını içermektedir. Bu proje ile sosyal medya linkerli üzerinde CRUD işlemlerinin yapılması heflenmiştir.

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
   veritabanınızı ekleyebilirsiniz.

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

- **Atom Component'ler:** Button, Input
- **Molekül Component'ler:** SearchBar, SocialButton
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
