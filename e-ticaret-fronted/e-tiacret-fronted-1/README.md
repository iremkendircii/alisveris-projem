# e-Ticaret Frontend

## Genel Bakış

e-Ticaret, kullanıcıların alışveriş deneyimlerini yönetmeleri için tasarlanmış bir web uygulamasıdır. Uygulama; kullanıcı kimlik doğrulama, ödeme işlemleri, sipariş yönetimi, kullanıcı profilleri ve yorum/inceleme bölümü gibi özellikler içermektedir.

## Proje Yapısı

Proje aşağıdaki gibi organize edilmiştir:

```
e-ticaret-fronted
├── src
│   ├── pages
│   │   ├── index.html               # Giriş formu ile ana giriş noktası
│   │   ├── payment.html             # Ödeme bilgilerini girmek için ödeme formu
│   │   ├── order-confirmation.html  # Sipariş verildikten sonra onay sayfası
│   │   ├── order.html               # Kullanıcının sipariş geçmişi
│   │   ├── profile.html             # Kullanıcı profil yönetimi
│   │   └── comments.html            # Yorumlar ve incelemeler bölümü
│   ├── styles
│   │   ├── floating-icons.css       # Yüzen ikonlar için stiller
│   │   └── global.css               # Tutarlı bir görünüm için genel stiller
│   ├── scripts
│   │   ├── floating-icons.js        # Yüzen ikonlar için işlevsellik
│   │   └── main.js                  # Kullanıcı etkileşimleri için ana JavaScript mantığı
```

## Kurulum Talimatları

1. **Depoyu Klonlayın**

   ```bash
   git clone <repository-url>
   cd e-ticaret-fronted
   ```

2. **Projeyi Açın**
   Projeyi tercih ettiğiniz bir kod editöründe açın.

3. **Uygulamayı Çalıştırın**
   `index.html` dosyasını bir web tarayıcısında açarak uygulamayı görüntüleyebilirsiniz. Daha iyi bir geliştirme deneyimi için yerel bir sunucu kullanmayı düşünebilirsiniz.

4. **Bağımlılıklar**
   Google Fonts gibi harici kaynakları yüklemek için internet bağlantınızın olduğundan emin olun.

## Özellikler

- **Kullanıcı Kimlik Doğrulama**: Kullanıcılar giriş yaparak profillerine ve sipariş geçmişlerine erişebilir.
- **Ödeme İşlemleri**: Ödeme bilgilerini girmek için özel bir ödeme sayfası.
- **Sipariş Yönetimi**: Kullanıcılar geçmiş siparişlerini ve durumlarını görüntüleyebilir.
- **Profil Yönetimi**: Kullanıcılar profil bilgilerini görüntüleyebilir ve düzenleyebilir.
- **Yorumlar ve İncelemeler**: Kullanıcılar geri bildirim bırakabilir ve mevcut yorumları okuyabilir.

## Gelecekteki Geliştirmeler

- Kullanıcı kimlik doğrulama ve veri depolama için backend entegrasyonu.
- Daha iyi bir kullanıcı deneyimi için UI/UX geliştirmeleri.
- Kullanıcı geri bildirimlerine dayalı olarak daha fazla özellik eklenmesi.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.
