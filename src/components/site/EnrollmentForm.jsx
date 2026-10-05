import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import FormField from './FormField';
import Pill from './Pill';
import { WHATSAPP_URL } from '@/lib/siteAssets';

const EMPTY_FORM = {
  student_name: '',
  birth_date: '',
  stage: 'Berçário',
  guardian_name: '',
  email: '',
  phone: '',
  message: '',
};

const STAGES = ['Berçário', 'Educação Infantil', 'Ainda não sei'];

// Função para formatar os dados do formulário para WhatsApp
const formatWhatsAppMessage = (formData) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Não informado';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR');
  };

  const message = `🏫 *SOLICITAÇÃO DE VAGA - ESCOLA PLUFT*

👶 *Nome do aluno(a):* ${formData.student_name || 'Não informado'}
📅 *Data de nascimento:* ${formatDate(formData.birth_date)}
🎒 *Etapa de interesse:* ${formData.stage || 'Não informado'}

👤 *Nome do responsável:* ${formData.guardian_name || 'Não informado'}
📧 *E-mail:* ${formData.email || 'Não informado'}
📱 *Telefone:* ${formData.phone || 'Não informado'}

💬 *Mensagem adicional:*
${formData.message || 'Nenhuma mensagem adicional.'}

---
_Enviado pelo formulário do site da Escola Pluft_`;

  return encodeURIComponent(message);
};

export default function EnrollmentForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  // Função para enviar via WhatsApp
  const sendToWhatsApp = (formData) => {
    const message = formatWhatsAppMessage(formData);
    const whatsappUrl = `${WHATSAPP_URL}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');

    // Validação básica
    const requiredFields = ['student_name', 'birth_date', 'guardian_name', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !form[field].trim());
    
    if (missingFields.length > 0) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setSaving(false);
      return;
    }

    try {
      // Tentar salvar no Base44 (opcional)
      await base44.entities.EnrollmentRequest.create({ ...form, message: form.message.trim() });
      
      // Enviar para WhatsApp
      sendToWhatsApp(form);
      
      setSent(true);
    } catch (err) {
      // Se falhar no Base44, ainda assim enviar para WhatsApp
      console.warn('Erro ao salvar no Base44:', err);
      
      // Enviar para WhatsApp mesmo se o Base44 falhar
      sendToWhatsApp(form);
      
      setError('Sua solicitação foi enviada para o WhatsApp! Se preferir, você pode também tentar enviar novamente.');
      setSent(true);
    } finally {
      setSaving(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-[22px] border border-[rgba(81,85,121,0.14)] bg-white p-7 shadow-[0_20px_50px_rgba(39,41,67,0.08)] min-[620px]:p-10">
        <span className="mb-3 block text-[28px] text-pluft-red">✅</span>
        <h2 className="m-0 font-display text-[30px] leading-[1.05] text-pluft-blue min-[620px]:text-[36px]">
          Solicitação enviada com sucesso!
        </h2>
        <p className="mt-4 text-[16px] leading-[1.75] text-[rgba(39,41,67,0.7)]">
          Suas informações sobre a vaga para <strong>{form.student_name}</strong> foram enviadas diretamente 
          para o nosso WhatsApp! Nossa equipe vai entrar em contato em breve.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Pill href={WHATSAPP_URL} variant="red" size="small" target="_blank" rel="noopener">
            Continuar no WhatsApp
          </Pill>
          <button
            onClick={() => {
              setSent(false);
              setForm(EMPTY_FORM);
              setError('');
            }}
            className="inline-flex items-center rounded-full border-2 border-pluft-blue bg-transparent px-5 py-2 text-sm font-bold text-pluft-blue transition-colors hover:bg-pluft-blue hover:text-white"
          >
            Nova solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-[rgba(81,85,121,0.14)] bg-white p-6 shadow-[0_20px_50px_rgba(39,41,67,0.08)] min-[620px]:p-10"
    >
      <div className="grid gap-5 min-[620px]:grid-cols-2 min-[620px]:gap-6">
        <FormField
          label="Nome do aluno(a)"
          name="student_name"
          value={form.student_name}
          onChange={update}
          placeholder="Nome completo da criança"
          required
        />
        <FormField
          label="Data de nascimento"
          name="birth_date"
          type="date"
          value={form.birth_date}
          onChange={update}
          required
        />
        <FormField
          label="Etapa de interesse"
          name="stage"
          value={form.stage}
          onChange={update}
          options={STAGES}
        />
        <FormField
          label="Nome do responsável"
          name="guardian_name"
          value={form.guardian_name}
          onChange={update}
          placeholder="Como podemos te chamar"
          required
        />
        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          placeholder="seuemail@exemplo.com"
          required
        />
        <FormField
          label="Telefone / WhatsApp"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={update}
          placeholder="(16) 99999-9999"
          required
        />
      </div>

      <div className="mt-5 min-[620px]:mt-6">
        <FormField
          label="Quer contar um pouco mais? (opcional)"
          name="message"
          type="textarea"
          value={form.message}
          onChange={update}
          placeholder="Dúvidas, período desejado, alguma necessidade específica..."
        />
      </div>

      {error && (
        <p className="mt-6 rounded-[14px] bg-[rgba(232,71,53,0.08)] px-4 py-3 text-[14px] font-bold leading-[1.6] text-pluft-red">
          {error}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-pluft-red px-6 font-black text-white shadow-[0_10px_24px_rgba(232,71,53,0.16)] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none min-[620px]:min-h-[52px] min-[620px]:px-[25px]"
        >
          {saving ? (
            <>
              <span className="mr-2">📱</span>
              Enviando para WhatsApp...
            </>
          ) : (
            <>
              <span className="mr-2">📱</span>
              Enviar via WhatsApp
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => sendToWhatsApp(form)}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-pluft-red bg-transparent px-5 font-bold text-pluft-red transition-colors hover:bg-pluft-red hover:text-white min-[620px]:min-h-[52px] min-[620px]:px-6"
        >
          💬 Só WhatsApp
        </button>
      </div>

      <p className="mt-4 text-[13px] leading-[1.6] text-[rgba(39,41,67,0.55)]">
        Suas informações serão enviadas diretamente para nosso WhatsApp. 
        Usamos seus dados apenas para o contato sobre a matrícula.
      </p>
    </form>
  );
}