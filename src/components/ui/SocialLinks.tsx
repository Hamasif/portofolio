import {
  Mail,
} from "lucide-react";

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-5">
            <Mail className="cursor-pointer transition hover:scale-125 hover:text-[#00F5C3]" />
        </div>
    );
};

export default SocialLinks;