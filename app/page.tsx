import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Ana navigasyon">
        <Link href="/" className="text-xl font-semibold tracking-[0.16em] text-forest">
          SYNERA
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-forest hover:text-gold">
            Giriş
          </Link>
          <Link href="/register" className="rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#17451b]">
            Kayıt Ol
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">İşletme Yönetim Platformu</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-forest md:text-7xl">
            İşinizi tek merkezden yönetin.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/75">
            Müşteri ilişkilerini, randevuları, personeli ve operasyonları; güvenli, sade ve ölçeklenebilir bir SaaS platformunda yönetin.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="rounded-sm bg-forest px-7 py-4 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-[#17451b]">
              İşletmenizi oluşturun
            </Link>
            <Link href="/login" className="rounded-sm border border-forest/20 px-7 py-4 text-center text-sm font-semibold text-forest transition hover:border-gold">
              Hesabınıza giriş yapın
            </Link>
          </div>
        </div>

        <div className="border-l border-gold/40 pl-8 lg:pl-12">
          <div className="space-y-10">
            {[
              ['Merkezi operasyon', 'Müşteri, personel, hizmet ve randevu yönetimini tek sistemde toplayın.'],
              ['Güvenli çoklu işletme', 'Her işletmenin verisi tenant izolasyonu ve erişim kontrolleriyle korunur.'],
              ['Akıllı otomasyon', 'Tekrarlanan iş akışlarını işletmenin kurallarına göre çalıştırın.']
            ].map(([title, text]) => (
              <article key={title}>
                <h2 className="text-lg font-semibold text-forest">{title}</h2>
                <p className="mt-2 max-w-md leading-7 text-charcoal/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
