# WhitedCrypt_ExpressAPI

WhitedCrypt algoritmasını uzaktan kullanabilmek için Node.js ve Express ile geliştirdiğim bir API.

## API Spesifikasyonu

### İstek parametreleri:

#### POST /kodla:
- **MaskelemeMetodu**: number
	- 1 = Görünmez karakterler
	- 2 = Sayılar
	- 3 = Emojiler
- **DuzYazi**: string
	- Kodlanması istenilen yazı.

#### POST /kodlamayicoz:
- **KodlanmisYazi**: string
	- Kodlanmış olan yazı.

#### POST /sifrele:
- **HashlemeAlgoritmasiAdi**: string
	- md5
	- sha1
	- sha224
	- sha256
	- sha384
	- sha512
	- sha3_224
	- sha3_256
	- sha3_384
	- sha3_512
- **Maskeli**: boolean
	- Çıktının maskelenmesinin istenilip istenilmediğini belirtir.
- **MaskelemeMetodu**: number
	- 1 = Görünmez karakterler
	- 2 = Sayılar
	- 3 = Emojiler
- **DuzYazi**: string
	- Şifrelenmesi istenilen yazı.
- **Anahtar**: string
	- Yazının şifrelenmesinde kullanılacak olan anahtar.

#### POST /sifrelemeyicoz:
- **SifrelenmisYazi**: string
	- Şifrelenmiş olan yazı.
- **Anahtar**: string
	- Yazının şifrelenmesinde kullanılmış olan anahtar.

### Yanıt Parametreleri:
- **Basarili**: boolean
	- İşlemin başarılı olup olmadığını ifade eder.
- **Sonuc**: string
	- İşlemin sonucu.
	- Eğer sunucu tarafında bir hata olursa, bu parametre boş bırakılacaktır.
	- Eğer kullanıcı geçersiz parametre(ler) girerse, geçersiz parametre(ler) buraya yazılacaktır.