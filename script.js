 
        function hitung(operator) {
            // Mendapatkan nilai dari input
            const angka1Input = document.getElementById('angka1');
            const angka2Input = document.getElementById('angka2');
            const hasilElement = document.getElementById('hasil');
            const errorElement = document.getElementById('error-message');
            
            // Reset pesan error
            errorElement.textContent = '';
            
            // Mendapatkan nilai input
            const angka1 = angka1Input.value.trim();
            const angka2 = angka2Input.value.trim();
            
            // Validasi input kosong
            if (angka1 === '' || angka2 === '') {
                errorElement.textContent = 'Input tidak valid. Harap masukkan angka yang benar.';
                hasilElement.textContent = 'Hasil: 0';
                return;
            }
            
            // Konversi ke angka
            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);
            
            // Validasi input bukan angka
            if (isNaN(num1) || isNaN(num2)) {
                errorElement.textContent = 'Input tidak valid. Harap masukkan angka yang benar.';
                hasilElement.textContent = 'Hasil: 0';
                return;
            }
            
            let hasil;
            
            // Melakukan perhitungan berdasarkan operator
            switch (operator) {
                case '+':
                    hasil = num1 + num2;
                    break;
                case '-':
                    hasil = num1 - num2;
                    break;
                case '*':
                    hasil = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        errorElement.textContent = 'Tidak bisa dibagi dengan nol';
                        hasilElement.textContent = 'Hasil: 0';
                        return;
                    }
                    hasil = num1 / num2;
                    break;
                default:
                    hasil = 0;
            }
            
            // Menampilkan hasil
            hasilElement.textContent = `Hasil: ${hasil}`;
        }
